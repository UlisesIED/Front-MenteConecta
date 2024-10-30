import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
})

export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        setAuth(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const login = () => console.log("iniciamos");
    const logout = () => console.log("terminamos");

    const valueContext = {
        auth,
        login,
        logout
    }



    if (auth === undefined) return null;

    return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>

}