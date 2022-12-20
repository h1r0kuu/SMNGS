import {Route, Routes} from "react-router-dom";
import {
    ADMIN_DASHBOARD, CALENDAR,
    FORGOT_PASSWORD, GROUPS_ADD, GROUP_EDIT, GROUP_LIST, GROUP_VIEW, HOLIDAY,
    HOME,
    LOGIN,
    MY_PROFILE,
    REGISTRATION, SCHEDULES_ADD, SCHEDULES_EDIT, SCHEDULES_LIST, SPORT,
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
    TEACHERS_VIEW, BOOKS_LIST, BOOKS_ADD
} from "../../constants/pathConstants";
import StudentDashboard from "../../pages/Student/StudentDashboard/StudentDashboard";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import ForgotPassword from "../../pages/Authentication/ForgotPassword";
import ProfilePage from "../../pages/Global/ProfilePage/ProfilePage";
import AdminDashboard from "../../pages/Admin/AdminDashboard/AdminDashboard";
import TeacherDashboard from "../../pages/Teacher/TeacherDashboard/TeacherDashboard";
import AdminStudentList from "../../pages/Admin/List/AdminStudentList/AdminStudentList";
import UserView from "../../pages/Global/UserView";
import Calendar from "../../pages/Global/Calendar/Calendar";
import React from "react";
import EditStudent from "../../pages/Student/EditStudent/EditStudent";
import EditSubject from "../../pages/Subject/EditSubject/EditSubject";
import AddSubject from "../../pages/Subject/AddSubject/AddSubject";
import EditTeacher from "../../pages/Teacher/EditTeacher/EditTeacher";
import AddTeacher from "../../pages/Teacher/AddTeacher/AddTeacher";
import AddStudent from "../../pages/Student/AddStudent/AddStudent";
import AddGroup from "../../pages/Group/AddGroup/AddGroup";
import TeacherView from "../../pages/Teacher/TeacherView/TeacherView";
import GroupView from "../../pages/Group/GroupView/GroupView";
import EditGroup from "../../pages/Group/EditGroup/EditGroup";
import AddSchedule from "../../pages/Schedule/AddSchedule/AddSchedule";
import AdminSubjectList from "../../pages/Admin/List/AdminSubjectList/AdminSubjectList";
import AdminGroupList from "../../pages/Admin/List/AdminGroupList/AdminGroupList";
import AdminTeacherList from "../../pages/Admin/List/AdminTeacherList/AdminTeacherList";
import NotFound from "../../components/NotFound/NotFound";

const AdminView = () => {
    return (
        <Routes>
            <Route path={HOME} element={<AdminDashboard />} />

            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTRATION} element={<Register />} />
            <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />

            <Route path={MY_PROFILE} element={<ProfilePage />} />

            <Route path={ADMIN_DASHBOARD} element={<AdminDashboard />} />
            <Route path={TEACHER_DASHBOARD} element={<TeacherDashboard />} />
            <Route path={STUDENT_DASHBOARD} element={<StudentDashboard />} />

            <Route path={STUDENTS_LIST} element={<AdminStudentList />} />
            <Route path={STUDENTS_VIEW} element={<UserView />} />
            <Route path={STUDENTS_ADD} element={<AddStudent />} />
            <Route path={STUDENTS_EDIT} element={<EditStudent />} />

            <Route path={TEACHERS_LIST} element={<AdminTeacherList />} />
            <Route path={TEACHERS_VIEW} element={<TeacherView />} />
            <Route path={TEACHERS_ADD} element={<AddTeacher />} />
            <Route path={TEACHERS_EDIT} element={<EditTeacher />} />

            <Route path={GROUP_LIST} element={<AdminGroupList />} />
            <Route path={GROUP_VIEW} element={<GroupView />} />
            <Route path={GROUP_EDIT} element={<EditGroup />} />
            <Route path={GROUPS_ADD} element={<AddGroup />} />

            <Route path={SUBJECTS_LIST} element={<AdminSubjectList />} />
            <Route path={SUBJECTS_ADD} element={<AddSubject />} />
            <Route path={SUBJECTS_EDIT} element={<EditSubject />} />

            <Route path={SCHEDULES_LIST} element={<AdminStudentList />} />
            <Route path={SCHEDULES_ADD} element={<AddSchedule />} />
            <Route path={SCHEDULES_EDIT} element={<EditSubject />} />

            <Route path={BOOKS_LIST} element={<AdminStudentList />} />
            <Route path={BOOKS_ADD} element={<AddSchedule />} />


            <Route path={CALENDAR} element={<Calendar />} />

            <Route path={"*"} element={<NotFound />} />
        </Routes>
    )
}

export default AdminView