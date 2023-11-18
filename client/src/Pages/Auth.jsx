import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/userContext";

const Auth = () => {
    const { user } = useContext(UserContext);

    return user.name ? (
        <>
            <Outlet />
        </>
    ) : (
        <>
            <Navigate to="/" />
        </>
    );
};

export default Auth;
