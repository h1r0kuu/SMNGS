import {Route, Routes} from "react-router-dom";
import {
    ADD_EXPENSE,
    ADD_FEES, ADD_SALARY,
    ADMIN_DASHBOARD, CALENDAR,
    EVENTS, EXAM_LIST, EXPENSES, FEES, FEES_COLLECTION,
    FORGOT_PASSWORD, GROUP_ADD, GROUP_LIST, GROUP_VIEW, HOLIDAY,
    HOME, HOSTEL, LIBRARY,
    LOGIN,
    MY_PROFILE,
    REGISTRATION, SALARY, SPORT,
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
import StudentDashboard from "../../pages/Dashboard/StudentDashboard";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import ForgotPassword from "../../pages/Authentication/ForgotPassword";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard";
import TeacherDashboard from "../../pages/Dashboard/TeacherDashboard";
import StudentList from "../../pages/List/StudentList";
import UserView from "../../pages/View/UserView";
import Calendar from "../../pages/Calendar/Calendar";
import React from "react";
import StudentEdit from "../../pages/Edit/StudentEdit";
import SubjectEdit from "../../pages/Edit/SubjectEdit";
import SubjectAdd from "../../pages/Add/SubjectAdd";
import TeacherEdit from "../../pages/Edit/TeacherEdit";
import TeacherAdd from "../../pages/Add/TeacherAdd";
import StudentAdd from "../../pages/Add/StudentAdd";
import GroupAdd from "../../pages/Add/GroupAdd";
import TeacherList from "../../pages/List/TeacherList";
import TeacherView from "../../pages/View/TeacherView";
import GroupList from "../../pages/List/GroupList";
import GroupView from "../../pages/View/GroupView";

const AdminView = () => {
    return (
        <Routes>
            <Route path={HOME} element={<StudentDashboard />} />

            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTRATION} element={<Register />} />
            <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />

            <Route path={MY_PROFILE} element={<ProfilePage />} />

            <Route path={ADMIN_DASHBOARD} element={<AdminDashboard />} />
            <Route path={TEACHER_DASHBOARD} element={<TeacherDashboard />} />
            <Route path={STUDENT_DASHBOARD} element={<StudentDashboard />} />

            <Route path={STUDENTS_LIST} element={<StudentList />} />
            <Route path={STUDENTS_VIEW} element={<UserView />} />
            <Route path={STUDENTS_ADD} element={<StudentAdd />} />
            <Route path={STUDENTS_EDIT} element={<StudentEdit />} />

            <Route path={TEACHERS_LIST} element={<TeacherList />} />
            <Route path={TEACHERS_VIEW} element={<TeacherView />} />
            <Route path={TEACHERS_ADD} element={<TeacherAdd />} />
            <Route path={TEACHERS_EDIT} element={<TeacherEdit />} />

            <Route path={GROUP_LIST} element={<GroupList />} />
            <Route path={GROUP_VIEW} element={<GroupView />} />
            <Route path={GROUP_ADD} element={<GroupAdd />} />

            <Route path={SUBJECTS_LIST} element={<StudentList />} />
            <Route path={SUBJECTS_ADD} element={<SubjectAdd />} />
            <Route path={SUBJECTS_EDIT} element={<SubjectEdit />} />

            <Route path={FEES_COLLECTION} element={<StudentList />} />
            <Route path={EXPENSES} element={<StudentList />} />
            <Route path={SALARY} element={<StudentList />} />
            <Route path={ADD_FEES} element={<StudentList />} />
            <Route path={ADD_EXPENSE} element={<StudentList />} />
            <Route path={ADD_SALARY} element={<StudentList />} />

            <Route path={HOLIDAY} element={<StudentList />} />
            <Route path={FEES} element={<StudentList />} />
            <Route path={EXAM_LIST} element={<StudentList />} />
            <Route path={EVENTS} element={<Calendar />} />
            <Route path={TIME_TABLE} element={<Calendar />} />
            <Route path={LIBRARY} element={<StudentList />} />
            <Route path={SPORT} element={<StudentList />} />
            <Route path={HOSTEL} element={<StudentList />} />
            <Route path={TRANSPORT} element={<StudentList />} />

            <Route path={CALENDAR} element={<Calendar />} />
        </Routes>
    )
}

export default AdminView