import {useCallback, useEffect, useState} from "react";
import {GroupResponse} from "../../types/group";

import {GroupService} from "../../services/groupService"

export const useFetchSingleGroup = (groupId: number) => {
    const [group, setGroup] = useState<GroupResponse>()
    const [isLoading, setLoading] = useState(false)

    const fetchSingleGroup = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await GroupService.findOne(groupId)
                setGroup(data);
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchSingleGroup().catch()
    }, [fetchSingleGroup])

    return {group, fetchSingleGroup, isLoading}
}