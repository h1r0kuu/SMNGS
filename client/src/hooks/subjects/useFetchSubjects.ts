import {useCallback, useEffect, useState} from "react";

import {SubjectService} from "../../services/subjectService"
import {PaginationProps, PaginationPropsDefault} from "../../types/pagination";
import {SubjectResponse} from "../../types/subject";

export const useFetchSubjects = () => {
    const [subjects, setSubjects] = useState<SubjectResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchSubjects = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await SubjectService.findAll()
                const { content, ...pagination } = data
                setSubjects(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchSubjects().catch()
    }, [fetchSubjects])

    return {subjects, pagination, fetchSubjects, isLoading}
}