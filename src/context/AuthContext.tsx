import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

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
    if (currentRoles.includes('Sales')) return currentRoles;

    const department = user.user_metadata?.department;
    const jobTitle = user.user_metadata?.job_title;

    const isSalesTeam = [department, jobTitle].some(val =>
      val && (val.toLowerCase().includes('commercial') || val.toLowerCase().includes('presales'))
    );

    if (isSalesTeam) {
      try {
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
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (session?.user) {
        let userRoles = await fetchRoles(session.user.id);
        userRoles = await autoAssignSalesRole(session.user, userRoles);
        setRoles(userRoles);
      } else {
        setRoles([]);
      }

      setLoading(false);
    };

    initializeAuth();

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session?.user) {
        // Only fetch if we don't have roles or if session user changed (though usually full reload happens)
        // For simplicity, re-fetch to be safe on login
        let userRoles = await fetchRoles(session.user.id);
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
