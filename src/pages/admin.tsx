import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { adminService, Profile, UserRole } from '../services/adminService';
import { useAuth } from '../context/AuthContext';

const AdminDashboardContent = () => {
    const [users, setUsers] = useState<Profile[]>([]);
    const [userRoles, setUserRoles] = useState<UserRole[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
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

    const handleAddRole = async (userId: string, roleName: string) => {
        try {
            await adminService.assignRole(userId, roleName);
            await fetchData(); // Refresh data
        } catch (err) {
            console.error("Error adding role:", err);
            alert("Failed to add role. Check console for details.");
        }
    };

    const handleRemoveRole = async (userId: string, roleName: string) => {
        if (!confirm(`Are you sure you want to remove role '${roleName}'?`)) return;
        try {
            await adminService.removeRole(userId, roleName);
            await fetchData(); // Refresh data
        } catch (err) {
            console.error("Error removing role:", err);
            alert("Failed to remove role. Check console for details.");
        }
    };

    const getUserRolesList = (userId: string) => {
        return userRoles
            .filter(ur => ur.user_id === userId)
            .map(ur => ur.roles.name);
    };

    if (loading) return <div className="container margin-vert--lg">Loading...</div>;
    if (error) return <div className="container margin-vert--lg text--danger">{error}</div>;

    return (
        <div className="container margin-vert--lg">
            <h1>Admin Dashboard</h1>
            <p>Manage users and roles.</p>

            <div className="table-responsive">
                <table className="table table--striped">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Roles</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            const roles = getUserRolesList(user.id);
                            return (
                                <tr key={user.id}>
                                    <td>{user.email}</td>
                                    <td>
                                        {roles.length > 0 ? (
                                            roles.map(role => (
                                                <span key={role} className="badge badge--secondary margin-right--sm">
                                                    {role}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text--italic">No roles</span>
                                        )}
                                    </td>
                                    <td>
                                        <div className="button-group">
                                            {!roles.includes('admin') && (
                                                <button
                                                    className="button button--sm button--primary margin-right--sm"
                                                    onClick={() => handleAddRole(user.id, 'admin')}
                                                >
                                                    + Admin
                                                </button>
                                            )}
                                            {!roles.includes('editor') && (
                                                <button
                                                    className="button button--sm button--info margin-right--sm"
                                                    onClick={() => handleAddRole(user.id, 'editor')}
                                                >
                                                    + Editor
                                                </button>
                                            )}
                                            {roles.includes('admin') && user.id !== session?.user?.id && (
                                                <button
                                                    className="button button--sm button--danger"
                                                    onClick={() => handleRemoveRole(user.id, 'admin')}
                                                >
                                                    - Admin
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
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
