import React, { useEffect, useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { adminService, Profile, UserRole } from '../services/adminService';
import { useAuth } from '../context/AuthContext';
import styles from './admin.module.css';
import { CaralIcon } from 'iconcaral2';

// Helper to get the single role for a user (or 'User' fallback)
const getUserRole = (roles: UserRole[], userId: string): string => {
    const userRole = roles.find(ur => ur.user_id === userId);
    return userRole?.roles?.name || 'User';
};

// Available roles for the dropdown
const AVAILABLE_ROLES = ['Admin', 'Editor', 'Sales', 'User'];

const AdminDashboardContent = () => {
    const [users, setUsers] = useState<Profile[]>([]);
    const [userRoles, setUserRoles] = useState<UserRole[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Toolbar State
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState<string | null>(null); // null means all
    const [sortConfig, setSortConfig] = useState<{ key: 'email' | 'role' | 'last_activity'; direction: 'asc' | 'desc' } | null>(null);

    // Selection State
    const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());

    // UI State for custom dropdowns (simple implementation: open ID or boolean)
    const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [openRoleDropdownId, setOpenRoleDropdownId] = useState<string | null>(null);
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);

    const { session } = useAuth();

    const fetchData = async () => {
        try {
            setLoading(true);
            const [usersData, rolesData] = await Promise.all([
                adminService.getUsers(),
                adminService.getUserRoles()
            ]);
            setUsers(usersData);
            setUserRoles(rolesData);
        } catch (err) {
            console.error("Error fetching admin data:", err);
            setError("Failed to load data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // --- Logic ---

    // 1. Single Role Change Logic
    const handleRoleChange = async (userId: string, newRole: string) => {
        setOpenRoleDropdownId(null); // Close dropdown
        const currentRole = getUserRole(userRoles, userId);
        if (currentRole.toLowerCase() === newRole.toLowerCase()) return; // No change

        if (!confirm(`Are you sure you want to change role from ${currentRole} to ${newRole}?`)) return;

        try {
            // Remove ALL existing roles for this user first (enforce single role)
            const userRolesEntries = userRoles.filter(ur => ur.user_id === userId);
            for (const ur of userRolesEntries) {
                await adminService.removeRole(userId, ur.roles.name);
            }

            // Assign new role
            await adminService.assignRole(userId, newRole);

            await fetchData();
        } catch (err) {
            console.error("Error changing role:", err);
            alert("Failed to change role.");
        }
    };

    // 2. Filter & Sort Logic
    const filteredUsers = useMemo(() => {
        let result = [...users];

        // Search
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(u => u.email.toLowerCase().includes(lowerTerm));
        }

        // Filter by Role
        if (roleFilter) {
            result = result.filter(u => {
                const role = getUserRole(userRoles, u.id);
                return role.toLowerCase() === roleFilter.toLowerCase();
            });
        }

        // Sort
        if (sortConfig) {
            result.sort((a, b) => {
                let valA: string = '';
                let valB: string = '';

                if (sortConfig.key === 'email') {
                    valA = a.email;
                    valB = b.email;
                } else if (sortConfig.key === 'role') {
                    valA = getUserRole(userRoles, a.id);
                    valB = getUserRole(userRoles, b.id);
                } else if (sortConfig.key === 'last_activity') {
                    // Fallback to empty string if missing
                    valA = a.last_sign_in_at || '';
                    valB = b.last_sign_in_at || '';
                }

                if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
                if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return result;
    }, [users, userRoles, searchTerm, roleFilter, sortConfig]);

    // 3. Selection
    const handleSelectAll = () => {
        if (selectedUsers.size === filteredUsers.length) {
            setSelectedUsers(new Set());
        } else {
            setSelectedUsers(new Set(filteredUsers.map(u => u.id)));
        }
    };

    const handleSelectRow = (id: string) => {
        const newSelected = new Set(selectedUsers);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedUsers(newSelected);
    };

    // --- Render Helpers ---

    const getRoleColorClass = (role: string) => {
        switch (role.toLowerCase()) {
            case 'admin': return styles.roleAdmin;
            case 'editor': return styles.roleEditor;
            case 'sales': return styles.roleSales;
            default: return styles.roleUser;
        }
    };

    if (loading) return <div className="container margin-vert--lg">Loading...</div>;
    if (error) return <div className="container margin-vert--lg text--danger">{error}</div>;

    return (
        <div className={styles.adminContainer}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className={styles.pageTitle}>Users</h1>

                <div className={styles.toolbar}>
                    {/* 1. Search */}
                    <div className={`${styles.searchContainer} ${isSearchInputVisible ? styles.searchContainerExpanded : ''}`}>
                        <input
                            type="text"
                            placeholder="Search users..."
                            className={`${styles.searchInput} ${isSearchInputVisible ? styles.searchInputVisible : ''}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onBlur={() => setIsSearchInputVisible(false)}
                            autoFocus={isSearchInputVisible}
                        />
                        <div className={styles.iconButton} onClick={() => setIsSearchInputVisible(!isSearchInputVisible)}>
                            <CaralIcon name='search' />
                        </div>
                    </div>

                    {/* 2. Filter */}
                    <div style={{ position: 'relative' }}>
                        <button
                            className={styles.iconButton + ' ' + styles.filterButton}
                            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                        >
                            <CaralIcon name='filter' />
                        </button>
                        {filterDropdownOpen && (
                            <div className={styles.roleDropdown} style={{ right: 0, left: 'auto' }}>
                                <div className={styles.roleOption} onClick={() => { setRoleFilter(null); setFilterDropdownOpen(false); }}>
                                    All Roles
                                </div>
                                {AVAILABLE_ROLES.map(role => (
                                    <div
                                        key={role}
                                        className={styles.roleOption}
                                        onClick={() => { setRoleFilter(role); setFilterDropdownOpen(false); }}
                                    >
                                        <span className={`${styles.roleDot} ${getRoleColorClass(role)}`}></span>
                                        {role}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 3. Sort */}
                    <div style={{ position: 'relative' }}>
                        <button
                            className={styles.sortButton}
                            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                        >
                            {/* Safe fallback for sort icon */}
                            <CaralIcon name='arrowUpArrowDown' />
                            Sort by
                        </button>
                        {sortDropdownOpen && (
                            <div className={styles.roleDropdown} style={{ right: 0, left: 'auto', width: '200px' }}>
                                {[
                                    { label: 'Email Asc', key: 'email', dir: 'asc' },
                                    { label: 'Email Desc', key: 'email', dir: 'desc' },
                                    { label: 'Role Asc', key: 'role', dir: 'asc' },
                                    { label: 'Role Desc', key: 'role', dir: 'desc' },
                                    { label: 'Last Activity Asc', key: 'last_activity', dir: 'asc' },
                                    { label: 'Last Activity Desc', key: 'last_activity', dir: 'desc' },
                                ].map(opt => (
                                    <div
                                        key={opt.label}
                                        className={styles.roleOption}
                                        onClick={() => {
                                            // @ts-ignore
                                            setSortConfig({ key: opt.key, direction: opt.dir });
                                            setSortDropdownOpen(false);
                                        }}
                                    >
                                        {opt.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className={styles.tableContainer}>
                {/* 4. Select All Header */}
                <div className={styles.tableHeader}>
                    <div>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={filteredUsers.length > 0 && selectedUsers.size === filteredUsers.length}
                            onChange={handleSelectAll}
                        />
                    </div>
                    <div>Email</div>
                    <div>Last activity</div>
                    <div>Role</div>
                    <div>Actions</div>
                </div>

                {filteredUsers.map(user => {
                    const currentRole = getUserRole(userRoles, user.id);
                    // Format date roughly
                    const lastActivity = user.last_sign_in_at
                        ? new Date(user.last_sign_in_at).toLocaleString()
                        : 'Never';

                    return (
                        <div key={user.id} className={styles.tableRow}>
                            {/* Checkbox */}
                            <div>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={selectedUsers.has(user.id)}
                                    onChange={() => handleSelectRow(user.id)}
                                />
                            </div>

                            {/* Email */}
                            <div className={styles.emailCell}>{user.email}</div>

                            {/* Last Activity */}
                            <div className={styles.activityCell}>{lastActivity}</div>

                            {/* 5. Role Dropdown */}
                            <div style={{ position: 'relative' }}>
                                <div
                                    className={styles.roleCell}
                                    onClick={() => setOpenRoleDropdownId(openRoleDropdownId === user.id ? null : user.id)}
                                >
                                    <div>
                                        <span className={`${styles.roleDot} ${getRoleColorClass(currentRole)}`}></span>
                                        <span className={styles.roleText}>{currentRole}</span>
                                    </div>
                                    {/* Safe fallback for chevron */}
                                    <CaralIcon name='chevronDown' />
                                </div>

                                {openRoleDropdownId === user.id && (
                                    <div className={styles.roleDropdown}>
                                        <div className={styles.roleOption} style={{ cursor: 'default', color: '#999', fontSize: '0.8rem' }}>
                                            Change role to:
                                        </div>
                                        {AVAILABLE_ROLES.map(role => (
                                            <div
                                                key={role}
                                                className={styles.roleOption}
                                                onClick={() => handleRoleChange(user.id, role)}
                                            >
                                                <span className={`${styles.roleDot} ${getRoleColorClass(role)}`}></span>
                                                {role}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Actions (6. Don't touch for now, just render dots) */}
                            <div>
                                <button className={styles.actionButton}>
                                    {/* Safe fallback for dots */}
                                    <CaralIcon name='dots' />
                                </button>
                            </div>
                        </div>
                    );
                })}

                {filteredUsers.length === 0 && (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                        No users found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default function AdminDashboard() {
    return (
        <Layout title="Admin Dashboard">
            <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboardContent />
            </ProtectedRoute>
        </Layout>
    );
}
