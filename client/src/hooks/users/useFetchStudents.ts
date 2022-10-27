import {useCallback, useEffect, useState} from "react";
import {StudentResponse} from "../../types/student";

import {StudentService} from "../../services/studentService"
import {PaginationProps} from "../../types/pagination";


export const useFetchStudents = () => {
    const [students, setStudents] = useState<StudentResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>()
    const [isLoading, setLoading] = useState(false)

    const fetchAllStudents = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await StudentService.getAll()
                const { content, ...pagination } = data
                setStudents(content);
                setPagination(pagination)
            } catch(e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchAllStudents().catch()
    }, [fetchAllStudents])

    return {students, pagination, fetchAllStudents, setStudents, isLoading}
}