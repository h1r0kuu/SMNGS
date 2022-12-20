import {useCallback, useEffect, useState} from "react";
import {TeacherResponse} from "../../types/teacher";

import {TeacherService} from "../../services/teacherService"
import {PaginationProps, PaginationPropsDefault} from "../../types/pagination";

export const useFetchTeachers = () => {
    const [teachers, setTeachers] = useState<TeacherResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchAllTeachers = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await TeacherService.getAllTeachers()
                const { content, ...pagination } = data
                setTeachers(content);
                setPagination(pagination)
            } catch(e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchAllTeachers().catch()
    }, [fetchAllTeachers])

    return {teachers, pagination, fetchAllTeachers, setTeachers, isLoading}
}