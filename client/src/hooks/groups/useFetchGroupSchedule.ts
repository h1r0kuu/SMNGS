import {useCallback, useEffect, useState} from "react";

import {GroupService} from "../../services/groupService"
import {ScheduleResponse} from "../../types/schedule";

export const useFetchGroupSchedule = (groupId: number) => {
    const [schedules, setSchedules] = useState<ScheduleResponse[]>()
    const [isLoading, setLoading] = useState(false)

    const fetchGroupSchedule = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await GroupService.getSchedule(groupId)
                setSchedules(data)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchGroupSchedule().catch()
    }, [fetchGroupSchedule])

    return {schedules, fetchGroupSchedule, isLoading}
}