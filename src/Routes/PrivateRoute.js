import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log(user)
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center h-96 items-center">
        <button className="btn btn-outline btn-primary">Loading...</button>
    </div>
    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;