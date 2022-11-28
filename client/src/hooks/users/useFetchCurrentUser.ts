import {useCallback, useEffect, useState} from "react";

import {AuthService} from "../../services/authService"
import {UserResponse} from "../../types/user";
import {UserRole} from "../../enums/userRole";

export function useFetchCurrentUser() {
    const [currentUser, setCurrentUser ] = useState<UserResponse>();
    const [role, setRole] = useState<UserRole>()
    const [isPending, setIsPending] = useState(false);

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem('token');
        if (!token) return;
        try {
            setIsPending(true);
            const {data} = await AuthService.checkToken(token)
            localStorage.setItem('token', data.token)
            setCurrentUser(data.user);
            setRole(data.user.role)
        } catch (e) {
            console.error(e);
        } finally {
            setIsPending(false);
        }
    }, [setIsPending, setCurrentUser, setRole]);

    useEffect(() => {
        fetchUser().catch();
    }, [fetchUser]);

    return { currentUser, setCurrentUser, isPending, setIsPending, fetchUser, role };
}