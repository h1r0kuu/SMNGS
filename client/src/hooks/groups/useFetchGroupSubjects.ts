import {useCallback, useEffect, useState} from "react";
import {GroupService} from "../../services/groupService"
import {GroupSubjectResponse} from "../../types/group";
import {PaginationProps, PaginationPropsDefault} from "../../types/pagination";
import {SubjectResponse} from "../../types/subject";

export const useFetchGroupSubjects = (groupId: number) => {
    const [subjects, setSubjects] = useState<SubjectResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchGroupSubjects = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await GroupService.getSubjects(groupId)
                const { content, ...pagination } = data
                setSubjects(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchGroupSubjects().catch()
    }, [fetchGroupSubjects])

    return {subjects, fetchGroupSubjects, pagination, isLoading}
}