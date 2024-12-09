import { useState } from "react";
import { useAuth } from "./useAuth";

import {
    getMeApi,
} from "../api/user";

export function useUser() {
    const [loadingUser, setLoadingUser] = useState(undefined);
    const [errorUser, setErrorUser] = useState(undefined);
    const { auth } = useAuth();

    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (error) {
            throw error;
        }
    }

    return {
        loadingUser,
        errorUser,
        getMe
    }
}