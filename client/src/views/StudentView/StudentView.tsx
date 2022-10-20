import {Route, Routes} from "react-router-dom";
import {
    ADD_EXPENSE,
    ADD_FEES, ADD_SALARY,
    ADMIN_DASHBOARD, CALENDAR,
    EVENTS, EXAM_LIST, EXPENSES, FEES, FEES_COLLECTION,
    FORGOT_PASSWORD, HOLIDAY,
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

const StudentView = () => {
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

            <Route path={TEACHERS_VIEW} element={<UserView />} />

            <Route path={SUBJECTS_LIST} element={<StudentList />} />

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

export default StudentView