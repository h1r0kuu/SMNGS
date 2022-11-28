import {useCallback, useEffect, useState} from "react";
import {StudentResponse} from "../../types/student";

import {StudentService} from "../../services/studentService"


export const useFetchSingleStudent = (id: number) => {
    const [student, setStudent] = useState<StudentResponse>()
    const [isLoading, setLoading] = useState(false)

    const fetchSingleStudent = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await StudentService.getOne(id)
                setStudent(data);
            } catch(e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchSingleStudent().catch()
    }, [fetchSingleStudent])

    return {student, fetchSingleStudent, isLoading}
}