import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
    allowedRoles?: string[];
    redirectPath?: string;
    children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    allowedRoles,
    redirectPath = '/',
    children
}) => {
    const { session, loading, roles } = useAuth();

    if (loading) {
        return <div className="container margin-vert--lg">Loading...</div>;
    }

    if (!session) {
        return <Redirect to="/login" />;
    }

    if (allowedRoles && allowedRoles.length > 0) {
        const hasRequiredRole = allowedRoles.some(role => roles.includes(role));
        if (!hasRequiredRole) {
            return <Redirect to={redirectPath} />;
        }
    }

    return <>{children}</>;
};

export default ProtectedRoute;
