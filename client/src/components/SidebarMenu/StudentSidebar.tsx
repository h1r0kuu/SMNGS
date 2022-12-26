import React, {useState} from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarMenuTitle from "./SidebarMenuTitle/SidebarMenuTitle";
import Submenu from "./Submenu/Submenu";
import {
    faBook,
    faChalkboardTeacher,
    faClock,
    faFolder,
    faLaptop,
    faSchool,
} from "@fortawesome/free-solid-svg-icons";
import SubmenuElem from "./SubmenuElem/SubmenuElem";
import {
    DASHBOARD, LIBRARY, SCHEDULE,
    STUDENTS_LIST,SUBJECT, TEACHER,
} from "../../constants/pathConstants";
import SingleElem from "./SingleElem/SingleElem";

const StudentSidebar = () => {
    const [selectedDropdown, setSelectedDropdown] = useState(0)
    return (
        <SidebarMenu>
            <SidebarMenuTitle title={"Main Menu"}/>
            <SingleElem title={"Dashboard"} href={DASHBOARD} icon={faLaptop}/>
            <SingleElem title={"Teacher"} href={TEACHER} icon={faChalkboardTeacher}/>
            <Submenu title={"Academic"}
                     icon={faSchool}
                     setSelectedDropdown={setSelectedDropdown}
                     selectedDropdown={selectedDropdown}
                     id={1}>
                <SubmenuElem title={"Subject"} href={SUBJECT} icon={faBook}/>
                <SubmenuElem title={"Routine"} href={SCHEDULE} icon={faClock} />
                <SubmenuElem title={"Syllabus"} href={STUDENTS_LIST} icon={faFolder} />
            </Submenu>
            {/*<SingleElem title={"Student Attendance"} href={LIBRARY} icon={faClipboardUser}/>*/}
            {/*<SingleElem title={"Exam Schedule"} href={LIBRARY} icon={faPuzzlePiece}/>*/}
            {/*<SingleElem title={"Mark"} href={INVOICE} icon={faFlask}/>*/}
            {/*<SingleElem title={"Invoice"} href={INVOICE} icon={faFileInvoiceDollar}/>*/}
            {/*<SingleElem title={"Message"} href={CONVERSATION} icon={faMessage}/>*/}
            {/*<SingleElem title={"Media"} href={MEDIA} icon={faFilm}/>*/}
            {/*<Submenu title={"Announcement"}*/}
            {/*         icon={faBullhorn}*/}
            {/*         setSelectedDropdown={setSelectedDropdown}*/}
            {/*         selectedDropdown={selectedDropdown}*/}
            {/*         id={2}>*/}
            {/*    <SubmenuElem title={"Notice"} href={STUDENTS_LIST} icon={faCalendar}/>*/}
            {/*    <SubmenuElem title={"Event"} href={STUDENTS_LIST} icon={faCalendarCheck} />*/}
            {/*</Submenu>*/}
            <SingleElem title={"Logout"} href={LIBRARY}/>
        </SidebarMenu>
    )
}

export default StudentSidebar