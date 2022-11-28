import {useCallback, useEffect, useState} from "react";
import {UserResponse} from "../../types/user";

import { UserService } from "../../services/userService"

export const useFetchUserByUsername = (username: string | undefined) => {
    const [user, setUser] = useState<UserResponse>()
    const [isLoading, setLoading] = useState(false)

    const fetchUserByUsername = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await UserService.getByUsername(username)
                setUser(data);
            } catch(e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchUserByUsername().catch()
    }, [fetchUserByUsername])

    return {user, fetchUserByUsername, isLoading}
}