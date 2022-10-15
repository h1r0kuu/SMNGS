import {ReactElement} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


const Fullcalendar = (): ReactElement => {
    return (
        <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
            initialView="dayGridMonth"
            events={[
                { title: 'Event Name 2', date: '2022-10-16', backgroundColor: "green", borderColor: "transparent"},
                { title: 'Event Name 3', date: '2022-10-17',backgroundColor: "red", borderColor: "transparent" },
                { title: 'Event Name 4', date: '2022-10-17' },
            ]}
            headerToolbar={{
                left: 'prev next today',
                center: 'title',
                right: 'dayGridMonth timeGridWeek timeGridDay'
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            themeSystem="bootstrap5"
        />
    )
}

export default Fullcalendar