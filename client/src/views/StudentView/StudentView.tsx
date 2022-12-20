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
import Invoice from "../../pages/Student/Invoice/Invoice";
import StudentTeacherList from "../../pages/Student/List/StudentTeacherList/StudentTeacherList";
import StudentSubjectList from "../../pages/Student/List/StudentSubjectList/StudentSubjectList";
import NotFound from "../../components/NotFound/NotFound";

const StudentView = () => {
    return (
        <Routes>
            <Route path={HOME} element={<StudentDashboard />} />

            <Route path={TEACHER} element={<StudentTeacherList />} />

            <Route path={SUBJECT} element={<StudentSubjectList />} />

            <Route path={MY_PROFILE} element={<ProfilePage />} />
            <Route path={SCHEDULE} element={<Calendar />} />

            <Route path={INVOICE} element={<Invoice />} />

            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTRATION} element={<Register />} />
            <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />

            <Route path={"*"} element={<NotFound />} />
        </Routes>
    )
}

export default StudentView