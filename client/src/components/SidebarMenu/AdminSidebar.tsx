import SidebarMenu from "./SidebarMenu";
import SidebarMenuTitle from "./SidebarMenuTitle/SidebarMenuTitle";
import Submenu from "./Submenu/Submenu";
import {
    faBookReader,
    faBuilding,
    faChalkboardTeacher,
    faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import SubmenuElem from "./SubmenuElem/SubmenuElem";
import {
    ADMIN_DASHBOARD,
    GROUPS_ADD,
    GROUP_LIST, SCHEDULES_ADD, SCHEDULES_LIST,
    STUDENT_DASHBOARD,
    STUDENTS_ADD,
    STUDENTS_LIST,
    SUBJECTS_ADD,
    SUBJECTS_LIST,
    TEACHER_DASHBOARD,
    TEACHERS_ADD,
    TEACHERS_LIST,
} from "../../constants/pathConstants";
import React, {useState} from "react";
import {faClock} from "@fortawesome/free-solid-svg-icons/faClock";

const AdminSidebar = () => {
    const [selectedDropdown, setSelectedDropdown] = useState(0)
    return (
        <SidebarMenu>
            <SidebarMenuTitle title={"Main Menu"}/>
            <Submenu title={"Dashboard"}
                     icon={faUserGraduate}
                     setSelectedDropdown={setSelectedDropdown}
                     selectedDropdown={selectedDropdown}
                     id={1}>
                <SubmenuElem title={"Admin dashboard"} href={ADMIN_DASHBOARD} />
                <SubmenuElem title={"Teacher dashboard"} href={TEACHER_DASHBOARD} />
                <SubmenuElem title={"Student dashboard"} href={STUDENT_DASHBOARD} />
            </Submenu>
            <Submenu title={"Students"}
                     icon={faUserGraduate}
                     setSelectedDropdown={setSelectedDropdown}
                     selectedDropdown={selectedDropdown}
                     id={2}>
                <SubmenuElem title={"Student List"} href={STUDENTS_LIST} />
                <SubmenuElem title={"Student Add"} href={STUDENTS_ADD} />
            </Submenu>
            <Submenu title={"Teachers"}
                     icon={faChalkboardTeacher}
                     setSelectedDropdown={setSelectedDropdown}
                     selectedDropdown={selectedDropdown}
                     id={3}>
                <SubmenuElem title={"Teacher List"} href={TEACHERS_LIST} />
                <SubmenuElem title={"Teacher Add"} href={TEACHERS_ADD} />
            </Submenu>
            <Submenu title={"Groups"}
                     icon={faBuilding}
                     setSelectedDropdown={setSelectedDropdown}
                     selectedDropdown={selectedDropdown}
                     id={4}>
                <SubmenuElem title={"Group List"} href={GROUP_LIST} />
                <SubmenuElem title={"Group Add"} href={GROUPS_ADD} />
            </Submenu>
            <Submenu title={"Subjects"}
                     icon={faBookReader}
                     setSelectedDropdown={setSelectedDropdown}
                     selectedDropdown={selectedDropdown}
                     id={5}>
                <SubmenuElem title={"Subject List"} href={SUBJECTS_LIST} />
                <SubmenuElem title={"Subject Add"} href={SUBJECTS_ADD} />
            </Submenu>

            <Submenu title={"Schedules"}
                     icon={faClock}
                     setSelectedDropdown={setSelectedDropdown}
                     selectedDropdown={selectedDropdown}
                     id={6}>
                <SubmenuElem title={"Schedules List"} href={SCHEDULES_LIST} />
                <SubmenuElem title={"Schedule Add"} href={SCHEDULES_ADD} />
            </Submenu>
        </SidebarMenu>
    )
}

export default AdminSidebar