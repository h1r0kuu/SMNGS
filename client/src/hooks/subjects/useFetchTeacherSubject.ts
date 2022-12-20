import {useCallback, useEffect, useState} from "react";

import {SubjectService} from "../../services/subjectService"
import {PaginationProps, PaginationPropsDefault} from "../../types/pagination";
import {TeacherSubjectResponse} from "../../types/subject";

export const useFetchTeacherSubject = () => {
    const [teacherSubject, setTeacherSubject] = useState<TeacherSubjectResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchTeacherSubject = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await SubjectService.getTeacherSubject()
                const { content, ...pagination } = data
                setTeacherSubject(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchTeacherSubject().catch()
    }, [fetchTeacherSubject])

    return {teacherSubject, pagination, fetchTeacherSubject, isLoading}
}