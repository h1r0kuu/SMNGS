import {Route, Routes} from "react-router-dom";
import {
    FORGOT_PASSWORD,
    HOME, INVOICE, LOGIN, MY_PROFILE,
    REGISTRATION, SCHEDULE, SUBJECT, TEACHER,
} from "../../constants/pathConstants";
import StudentDashboard from "../../pages/Student/StudentDashboard/StudentDashboard";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import ForgotPassword from "../../pages/Authentication/ForgotPassword";
import ProfilePage from "../../pages/Global/ProfilePage/ProfilePage";
import Calendar from "../../pages/Global/Calendar/Calendar";
import React from "react";
import TeacherList from "../../pages/Teacher/TeacherList/TeacherList";
import Invoice from "../../pages/Student/Invoice/Invoice";
import SubjectList from "../../pages/Subject/SubjectList/SubjectList";

const StudentView = () => {
    return (
        <Routes>
            <Route path={HOME} element={<StudentDashboard />} />

            <Route path={TEACHER} element={<TeacherList />} />

            <Route path={SUBJECT} element={<SubjectList />} />

            <Route path={MY_PROFILE} element={<ProfilePage />} />
            <Route path={SCHEDULE} element={<Calendar />} />

            <Route path={INVOICE} element={<Invoice />} />

            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTRATION} element={<Register />} />
            <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />

        </Routes>
    )
}

export default StudentView