import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import {useCurrentUser} from "../../../context/UserContext";
import {useEffect, useState} from "react";
import {ScheduleResponse} from "../../../types/schedule";
import {StudentService} from "../../../services/studentService"
import {GroupService} from "../../../services/groupService"

const Fullcalendar = (props) => {
    const localizer = momentLocalizer(moment)
    const [schedules, setSchedules] = useState<ScheduleResponse[]>()
    const {currentUser} = useCurrentUser()

    useEffect(() => {
        StudentService.getOne(currentUser.id).then(({data}) => {
            GroupService.getSchedule(data.group.id).then(({data}) => {
                setSchedules(data)
            })

        })

    }, [])

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={schedules}
                toolbar={true}
                startAccessor="timeStart"
                endAccessor="timeEnd"
                views={{
                    day: true,
                    week: true,
                    month: true
                }}
            />
        </div>
    )
}

export default Fullcalendar