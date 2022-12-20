import {Route, Routes} from "react-router-dom";
import {
    CONVERSATION, GROUPS,
    HOME,
    MEDIA, PROFILE,
    STUDENT,
    TEACHER,
} from "../../constants/pathConstants";
import React from "react";
import TeacherDashboard from "../../pages/Teacher/TeacherDashboard/TeacherDashboard";
import TeacherGroups from "../../pages/Teacher/TeacherGroups/TeacherGroups";
import ProfilePage from "../../pages/Global/ProfilePage/ProfilePage";
import TeacherStudentList from "../../pages/Teacher/List/TeacherStudentList/TeacherStudentList";
import TeacherGroupList from "../../pages/Teacher/List/TeacherGroupList/TeacherGroupList";
import NotFound from "../../components/NotFound/NotFound";

const TeacherView = () => {
    return (
        <Routes>
            <Route path={HOME} element={<TeacherDashboard />} />
            <Route path={PROFILE} element={<ProfilePage />} />
            <Route path={STUDENT} element={<TeacherStudentList />} />
            <Route path={GROUPS} element={<TeacherGroupList />} />

            <Route path={MEDIA} element={<TeacherGroups />} />

            <Route path={"*"} element={<NotFound />} />
        </Routes>
    )
}

export default TeacherView