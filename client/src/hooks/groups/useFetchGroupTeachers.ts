import {useCallback, useEffect, useState} from "react";
import {PaginationProps, PaginationPropsDefault} from "../../types/pagination";
import {TeacherResponse} from "../../types/teacher";
import {GroupService} from "../../services/groupService";

export const useFetchGroupTeachers = (groupId: number) => {
    const [teachers, setTeachers] = useState<TeacherResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchGroupTeachers = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await GroupService.getTeachers(groupId)
                const { content, ...pagination } = data
                setTeachers(content);
                setPagination(pagination)
            } catch(e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchGroupTeachers().catch()
    }, [fetchGroupTeachers])

    return {teachers, pagination, fetchGroupTeachers, setTeachers, isLoading}
}