import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

console.log('🚀 AuthContext.tsx file loaded');

type AuthContextType = {
  session: any;
  loading: boolean;
  roles: string[];
  hasRole: (role: string) => boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: true,
  roles: [],
  hasRole: () => false
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('🏗️ 🚀🚀 AuthProvider rendering');
  const [session, setSession] = useState<any>(null);
  const [roles, setRoles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRoles = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('roles(name)')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching roles:', error);
        return [];
      }

      // Extract role names from the nested response
      // @ts-ignore
      const userRoles = data?.map((item: any) => item.roles?.name) || [];
      return userRoles;
    } catch (error) {
      console.error('Unexpected error fetching roles:', error);
      return [];
    }
  };

  const autoAssignSalesRole = async (user: any, currentRoles: string[]) => {
    console.log('--- Auto-Assignment Check ---');
    console.log('User:', user.email);
    console.log('Full Metadata:', JSON.stringify(user.user_metadata, null, 2));

    if (currentRoles.includes('Sales')) {
      console.log('User already has Sales role, skipping');
      return currentRoles;
    }

    const metadata = user.user_metadata || {};
    const customClaims = metadata.custom_claims || {};

    // Azure AD can place these in different places depending on configuration
    const department = metadata.department || customClaims.department;
    const jobTitle = metadata.job_title || metadata.jobTitle || customClaims.jobTitle || customClaims.job_title;

    console.log('Resolved Department:', department);
    console.log('Resolved Job Title:', jobTitle);

    const isSalesTeam = [department, jobTitle].some(val =>
      val && (val.toLowerCase().includes('commercial') || val.toLowerCase().includes('presales'))
    );

    console.log('Is user in Sales team?', isSalesTeam);

    if (isSalesTeam) {
      try {
        console.log('Attempting to assign "Sales" role...');
        const { data: roleData, error: roleError } = await supabase
          .from('roles')
          .select('id')
          .ilike('name', 'Sales')
          .single();

        if (roleError || !roleData) {
          console.error('Error finding "Sales" role:', roleError);
          return currentRoles;
        }

        const { error: assignError } = await supabase
          .from('user_roles')
          .insert({ user_id: user.id, role_id: roleData.id });

        if (assignError) {
          if (assignError.code === '23505') { // Unique violation, user already has the role
            return [...currentRoles, 'Sales'];
          }
          console.error('Error assigning "Sales" role:', assignError);
          return currentRoles;
        }

        console.log('Successfully assigned "Sales" role automatically');
        return [...currentRoles, 'Sales'];
      } catch (err) {
        console.error('Unexpected error during auto role assignment:', err);
      }
    }
    return currentRoles;
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('🔄 Initializing Auth...');
        const timeout = setTimeout(() => {
          console.warn('⚠️ supabase.auth.getSession() is taking longer than 5 seconds...');
        }, 5000);

        const { data: { session }, error } = await supabase.auth.getSession();
        clearTimeout(timeout);

        if (error) {
          console.error('❌ Error fetching session:', error);
        }

        console.log('📡 Session fetched:', session ? 'User logged in' : 'No user');
        if (session) {
          console.log('📧 Logged as:', session.user.email);
        }

        setSession(session);

        if (session?.user) {
          let userRoles = await fetchRoles(session.user.id);
          console.log('🎭 Fetched roles:', userRoles);
          userRoles = await autoAssignSalesRole(session.user, userRoles);
          setRoles(userRoles);
        } else {
          setRoles([]);
        }
      } catch (err) {
        console.error('💥 Critical error in initializeAuth:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('🔔 Auth State Changed:', event);
      setSession(session);
      if (session?.user) {
        console.log('📧 Session user:', session.user.email);
        let userRoles = await fetchRoles(session.user.id);
        console.log('🎭 Fetched roles (on change):', userRoles);
        userRoles = await autoAssignSalesRole(session.user, userRoles);
        setRoles(userRoles);
      } else {
        setRoles([]);
      }
      setLoading(false);
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const hasRole = (role: string) => roles.includes(role);

  return (
    <AuthContext.Provider value={{ session, loading, roles, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
