import React, {ReactElement, useState} from "react";
import {
    faBaseballBall, faBook,
    faBookReader,
    faBuilding, faBus, faCalendarDay,
    faChalkboardTeacher, faClipboardList, faCommentDollar, faFileInvoiceDollar, faHollyBerry, faHotel, faTable,
    faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import SidebarMenuTitle from "./SidebarMenuTitle/SidebarMenuTitle";
import Submenu from "./Submenu/Submenu";
import SubmenuElem from "./SubmenuElem/SubmenuElem";
import SingleElem from "./SingleElem/SingleElem";
import {
    ADD_EXPENSE,
    ADD_FEES,
    ADD_SALARY,
    ADMIN_DASHBOARD,
    EVENTS, EXAM_LIST,
    EXPENSES,
    FEES,
    FEES_COLLECTION, GROUP_ADD, GROUP_LIST, GROUP_VIEW,
    HOLIDAY, HOSTEL, LIBRARY,
    SALARY, SPORT,
    STUDENT_DASHBOARD,
    STUDENTS_ADD,
    STUDENTS_EDIT,
    STUDENTS_LIST,
    STUDENTS_VIEW,
    SUBJECTS_ADD, SUBJECTS_EDIT,
    SUBJECTS_LIST,
    TEACHER_DASHBOARD,
    TEACHERS_ADD,
    TEACHERS_EDIT,
    TEACHERS_LIST,
    TEACHERS_VIEW, TIME_TABLE, TRANSPORT
} from "../../constants/pathConstants";
import { Scrollbars } from 'react-custom-scrollbars';

const SidebarMenu = (): ReactElement => {
    const [selectedDropdown, setSelectedDropdown] = useState(0)

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <Scrollbars autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={500}
                            renderTrackVertical={props => <div {...props} className="track-vertical"/>} >
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
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
                                <SubmenuElem title={"Student View"} href={STUDENTS_VIEW} />
                                <SubmenuElem title={"Student Add"} href={STUDENTS_ADD} />
                                <SubmenuElem title={"Student Edit"} href={STUDENTS_EDIT} />
                            </Submenu>
                            <Submenu title={"Teachers"}
                                     icon={faChalkboardTeacher}
                                     setSelectedDropdown={setSelectedDropdown}
                                     selectedDropdown={selectedDropdown}
                                     id={3}>
                                <SubmenuElem title={"Teacher List"} href={TEACHERS_LIST} />
                                <SubmenuElem title={"Teacher View"} href={TEACHERS_VIEW} />
                                <SubmenuElem title={"Teacher Add"} href={TEACHERS_ADD} />
                                <SubmenuElem title={"Teacher Edit"} href={TEACHERS_EDIT} />
                            </Submenu>
                            <Submenu title={"Groups"}
                                     icon={faBuilding}
                                     setSelectedDropdown={setSelectedDropdown}
                                     selectedDropdown={selectedDropdown}
                                     id={4}>
                                <SubmenuElem title={"Group List"} href={GROUP_LIST} />
                                <SubmenuElem title={"Group View"} href={GROUP_VIEW} />
                                <SubmenuElem title={"Group Add"} href={GROUP_ADD} />
                            </Submenu>
                            <Submenu title={"Subjects"}
                                     icon={faBookReader}
                                     setSelectedDropdown={setSelectedDropdown}
                                     selectedDropdown={selectedDropdown}
                                     id={5}>
                                <SubmenuElem title={"Subject List"} href={SUBJECTS_LIST} />
                                <SubmenuElem title={"Subject Add"} href={SUBJECTS_ADD} />
                                <SubmenuElem title={"Subject Edit"} href={SUBJECTS_EDIT} />
                            </Submenu>

                            <SidebarMenuTitle title={"Management"}/>
                            <Submenu title={"Accounts"}
                                     icon={faFileInvoiceDollar}
                                     setSelectedDropdown={setSelectedDropdown}
                                     selectedDropdown={selectedDropdown}
                                     id={6}>
                                <SubmenuElem title={"Fees Collection"} href={FEES_COLLECTION} />
                                <SubmenuElem title={"Expenses"} href={EXPENSES} />
                                <SubmenuElem title={"Salary"} href={SALARY} />
                                <SubmenuElem title={"Add Fees"} href={ADD_FEES} />
                                <SubmenuElem title={"Add Expenses"} href={ADD_EXPENSE} />
                                <SubmenuElem title={"Add Salary"} href={ADD_SALARY} />
                            </Submenu>

                            <SingleElem title={"Holiday"} href={HOLIDAY} icon={faHollyBerry}/>
                            <SingleElem title={"Fees"} href={FEES} icon={faCommentDollar}/>
                            <SingleElem title={"Exam list"} href={EXAM_LIST} icon={faClipboardList}/>
                            <SingleElem title={"Events"} href={EVENTS} icon={faCalendarDay}/>
                            <SingleElem title={"TimeTable"} href={TIME_TABLE} icon={faTable}/>
                            <SingleElem title={"Library"} href={LIBRARY} icon={faBook}/>

                            <SidebarMenuTitle title={"Others"}/>
                            <SingleElem title={"Sports"} href={SPORT} icon={faBaseballBall}/>
                            <SingleElem title={"Hostel"} href={HOSTEL} icon={faHotel}/>
                            <SingleElem title={"Transport"} href={TRANSPORT} icon={faBus}/>

                        </ul>
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}

export default SidebarMenu;