import React, { useContext } from 'react';
import LoadingSpin from '../components/LoadingSpin';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    

    if (loading) {
        return <LoadingSpin></LoadingSpin>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to={"/login"}></Navigate>;;
};

export default PrivateRoute;