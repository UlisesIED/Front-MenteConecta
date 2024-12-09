import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { getToken, removeToken, setToken } from '../api/token';
import { useUser } from '../hooks';


export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
})

export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(null);
    const { getMe } = useUser()

    useEffect(() => {
        (async () => {
            const token = getToken();
            if (token) {

                const { exp } = jwtDecode(token);
                const expirationTime = exp * 1000 - 60000;
                if (Date.now() >= expirationTime) {
                    removeToken();
                    setAuth(null);
                } else {
                    const me = await getMe(token);
                    setAuth({ token, me });
                }
            } else {
                setAuth(null);
            }
        })();
    }, [])


    const login = async (token) => {
        setToken(token);
        const me = await getMe(token);
        setAuth({ token, me });
    };

    const logout = () => {
        if (auth) {
            removeToken();
            setAuth(null);
        }
    };

    const valueContext = {
        auth,
        login,
        logout
    }

    if (auth === undefined) return null;

    return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>

}