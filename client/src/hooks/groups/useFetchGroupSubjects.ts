import {useCallback, useEffect, useState} from "react";
import {GroupService} from "../../services/groupService"
import {GroupSubjectResponse} from "../../types/group";

export const useFetchGroupSubjects = (groupId: number) => {
    const [subjects, setSubjects] = useState<GroupSubjectResponse[]>([])
    const [isLoading, setLoading] = useState(false)

    const fetchGroupSubjects = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await GroupService.findOne(groupId)
                setSubjects(data.groupSubjects);
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchGroupSubjects().catch()
    }, [fetchGroupSubjects])

    return {subjects, fetchGroupSubjects, isLoading}
}