import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.js';

export const UserRouteGuard = ({
    children
}) => {
    const { user } = useAuthContext();

    return user.email ? children : <Navigate to="/login" />;
};

export const GuestRouteGuard = ({
    children
}) => {
    const { user } = useAuthContext();

    return user.email ? <Navigate to="/" /> : children;
};
