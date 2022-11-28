import {Route, Routes} from "react-router-dom";
import {
    CONVERSATION,
    HOME,
    MEDIA, PROFILE,
    STUDENT,
    TEACHER,
} from "../../constants/pathConstants";
import React from "react";
import TeacherDashboard from "../../pages/Teacher/TeacherDashboard/TeacherDashboard";
import TeacherGroups from "../../pages/Teacher/TeacherGroups/TeacherGroups";
import StudentList from "../../pages/Teacher/StudentList";
import TeacherList from "../../pages/Teacher/TeacherList/TeacherList";
import ProfilePage from "../../pages/Global/ProfilePage/ProfilePage";

const TeacherView = () => {
    return (
        <Routes>
            <Route path={HOME} element={<TeacherDashboard />} />
            <Route path={PROFILE} element={<ProfilePage />} />
            <Route path={STUDENT} element={<StudentList />} />
            <Route path={TEACHER} element={<TeacherList />} />

            <Route path={CONVERSATION} element={<TeacherList />} />
            <Route path={MEDIA} element={<TeacherGroups />} />

        </Routes>
    )
}

export default TeacherView