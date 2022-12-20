import {useCallback, useEffect, useState} from "react";
import {TeacherResponse} from "../../types/teacher";

import {TeacherService} from "../../services/teacherService"

export const useFetchSingleTeacher = (id: number) => {
    const [teacher, setTeacher] = useState<TeacherResponse>()
    const [isLoading, setLoading] = useState(false)

    const fetchSingleTeacher = useCallback(
        async () => {
            setLoading(true)
            try {
                const { data } = await TeacherService.getOne(id)
                setTeacher(data);
            } catch(e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchSingleTeacher().catch()
    }, [fetchSingleTeacher])

    return {teacher, fetchSingleTeacher, isLoading}
}