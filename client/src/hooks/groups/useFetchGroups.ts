import {useCallback, useEffect, useState} from "react";
import {GroupResponse} from "../../types/group";

import {GroupService} from "../../services/groupService"
import {PaginationProps, PaginationPropsDefault} from "../../types/pagination";

export const useFetchGroups = () => {
    const [groups, setGroups] = useState<GroupResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchGroups = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await GroupService.findAll()
                const { content, ...pagination } = data
                setGroups(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchGroups().catch()
    }, [fetchGroups])

    return {groups, pagination, fetchGroups, isLoading}
}