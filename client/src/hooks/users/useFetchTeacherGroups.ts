import {useCallback, useEffect, useState} from "react";
import {PaginationProps} from "../../types/pagination";
import {GroupResponse} from "../../types/group";

import {TeacherService} from "../../services/teacherService"

export const useFetchTeacherGroups = (id: number) => {
    const [groups, setGroups] = useState<GroupResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>()
    const [isLoading, setLoading] = useState(false)

    const fetchTeacherGroups = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await TeacherService.getGroups(id)
                const { content, ...pagination } = data
                setGroups(content);
                setPagination(pagination)
            } catch(e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchTeacherGroups().catch()
    }, [fetchTeacherGroups])

    return {groups, pagination, fetchTeacherGroups, setGroups, isLoading}
}