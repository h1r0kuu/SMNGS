import {useCallback, useEffect, useState} from "react";
import {StudentResponse} from "../../types/student";
import {GroupResponse} from "../../types/group";

import {GroupService} from "../../services/groupService"

export const useFetchGroups = () => {
    const [groups, setGroups] = useState<GroupResponse[]>()
    const [isLoading, setLoading] = useState(false)

    const fetchGroups = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await GroupService.findAll()
                setGroups(data);
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchGroups().catch()
    }, [fetchGroups])

    return {groups, fetchGroups, isLoading}
}