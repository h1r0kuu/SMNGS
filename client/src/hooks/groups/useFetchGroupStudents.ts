import {useCallback, useEffect, useState} from "react";
import {StudentResponse} from "../../types/student";

import {GroupService} from "../../services/groupService"
import {PaginationProps} from "../../types/pagination";

export const useFetchGroupStudents = (groupId: number) => {
    const [students, setStudents] = useState<StudentResponse[]>()
    const [pagination, setPagination] = useState<PaginationProps>()
    const [isLoading, setLoading] = useState(false)

    const fetchGroupStudents = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await GroupService.getStudents(groupId)
                const { content, ...pagination } = data
                setStudents(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchGroupStudents().catch()
    }, [fetchGroupStudents])

    return {students, pagination, fetchGroupStudents, isLoading}
}