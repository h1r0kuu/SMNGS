import {useCallback, useEffect, useState} from "react";
import {UserResponse} from "../../types/user";

import { UserService } from "../../services/userService"

export const useFetchUsers = () => {
    const [clients, setClients] = useState<UserResponse[]>()
    const [isLoading, setLoading] = useState(false)

    const fetchAllUsers = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await UserService.getAllUsers()
                setClients(data);
            } catch(e) {

            }
            setLoading(false)
        }
    , [])

    useEffect(() => {
        fetchAllUsers().catch()
    }, [fetchAllUsers])

    return {clients, fetchAllUsers, isLoading}
}