import { supabase } from '../lib/supabaseClient';

export interface Profile {
    id: string;
    email: string;
}

export interface UserRole {
    user_id: string;
    role_id: number;
    roles: {
        name: string;
    };
    profiles: {
        email: string;
    };
}

export const adminService = {
    async getUsers(): Promise<Profile[]> {
        const { data, error } = await supabase
            .from('profiles')
            .select('*');
        if (error) {
            console.error("Error fetching users:", error);
            return [];
        }
        return data || [];
    },

    async getUserRoles(): Promise<UserRole[]> {
        // Note: This assumes a foreign key from user_roles.user_id to profiles.id exists
        // If not, we might need to join differently or fetch separately.
        // Since profiles.id is PK and user_roles.user_id is FK to auth.users, and profiles.id is FK to auth.users,
        // they share the same ID space. Supabase can join if FK exists or is inferred.
        // We might need to add an explicit FK in SQL if Supabase doesn't detect it for the join.
        // For now, let's try. If it fails, we'll need to add FK:
        // alter table user_roles add constraint user_roles_user_id_fkey_profiles foreign key (user_id) references profiles(id);

        const { data, error } = await supabase
            .from('user_roles')
            .select('*, roles(name), profiles(email)');

        if (error) {
            console.error("Error fetching user roles:", error);
            return [];
        }
        // @ts-ignore
        return data || [];
    },

    async assignRole(userId: string, roleName: string) {
        // 1. Get role ID
        const { data: roleData, error: roleError } = await supabase
            .from('roles')
            .select('id')
            .eq('name', roleName)
            .single();

        if (roleError) throw roleError;

        // 2. Insert user_role
        const { error } = await supabase
            .from('user_roles')
            .insert({ user_id: userId, role_id: roleData.id });

        if (error) throw error;
    },

    async removeRole(userId: string, roleName: string) {
        // 1. Get role ID
        const { data: roleData, error: roleError } = await supabase
            .from('roles')
            .select('id')
            .eq('name', roleName)
            .single();

        if (roleError) throw roleError;

        // 2. Delete user_role
        const { error } = await supabase
            .from('user_roles')
            .delete()
            .match({ user_id: userId, role_id: roleData.id });

        if (error) throw error;
    }
};
