import React, { useContext } from 'react';
import AuthContext from '../../Contexts/Authprovider/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <p>Loading...</p>
    }

    if (user) {
        return children;
    }
};

export default PrivateRoute;