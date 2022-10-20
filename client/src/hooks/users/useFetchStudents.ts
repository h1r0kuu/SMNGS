import {useCallback, useEffect, useState} from "react";
import {StudentResponse} from "../../types/student";

import {StudentService} from "../../services/studentService"


export const useFetchStudents = () => {
    const [students, setStudents] = useState<StudentResponse[]>([])
    const [isLoading, setLoading] = useState(false)

    const fetchAllStudents = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await StudentService.getAll()
                setStudents(data);
            } catch(e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchAllStudents().catch()
    }, [fetchAllStudents])

    return {students, fetchAllStudents, setStudents, isLoading}
}