import SidebarMenu from "./SidebarMenu";
import SidebarMenuTitle from "./SidebarMenuTitle/SidebarMenuTitle";
import Submenu from "./Submenu/Submenu";
import {
    faBook,
    faChalkboardTeacher, faClock,
    faFilm, faLaptop, faMessage, faSchool,
    faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import SubmenuElem from "./SubmenuElem/SubmenuElem";
import {
    CONVERSATION,
    HOME, LIBRARY, MEDIA, ROUTINE,
    STUDENT,TEACHER,
} from "../../constants/pathConstants";
import SingleElem from "./SingleElem/SingleElem";
import React, {useState} from "react";

const TeacherSidebar = () => {
    const [selectedDropdown, setSelectedDropdown] = useState(0)
    return (
        <SidebarMenu>
            <SidebarMenuTitle title={"Main Menu"}/>
            <SingleElem title={"Dashboard"} href={HOME} icon={faLaptop}/>
            <SingleElem title={"Student"} href={STUDENT} icon={faUserGraduate}/>
            <SingleElem title={"Teacher"} href={TEACHER} icon={faChalkboardTeacher}/>

            <Submenu title={"Academic"}
                     icon={faSchool}
                     setSelectedDropdown={setSelectedDropdown}
                     selectedDropdown={selectedDropdown}
                     id={1}>
                <SubmenuElem title={"Routine"} href={ROUTINE} icon={faClock} />
                {/*<SubmenuElem title={"Syllabus"} href={STUDENTS_LIST} icon={faFolder} />*/}
            </Submenu>

            <SingleElem title={"Message"} href={CONVERSATION} icon={faMessage}/>
            <SingleElem title={"Media"} href={MEDIA} icon={faFilm}/>

            <SingleElem title={"Logout"} href={LIBRARY} icon={faBook}/>
        </SidebarMenu>
    )
}

export default TeacherSidebar