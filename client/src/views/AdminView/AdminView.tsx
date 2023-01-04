import {Route, Routes} from "react-router-dom";
import {
    ADMIN_DASHBOARD,
    CALENDAR,
    FORGOT_PASSWORD,
    GROUPS_ADD,
    GROUP_EDIT,
    GROUP_LIST,
    GROUP_VIEW,
    DASHBOARD,
    LOGIN,
    MY_PROFILE,
    REGISTRATION,
    SCHEDULES_ADD,
    SCHEDULES_EDIT,
    SCHEDULES_LIST,
    STUDENT_DASHBOARD,
    STUDENTS_ADD,
    STUDENTS_EDIT,
    STUDENTS_LIST,
    STUDENTS_VIEW,
    SUBJECTS_ADD,
    SUBJECTS_EDIT,
    SUBJECTS_LIST,
    TEACHER_DASHBOARD,
    TEACHERS_ADD,
    TEACHERS_EDIT,
    TEACHERS_LIST,
    TEACHERS_VIEW,
    BOOKS_LIST,
    BOOKS_ADD,
    GENRE_LIST,
    GENRE_ADD,
    AUTHORS_LIST,
    AUTHORS_ADD,
    PUBLISHERS_LIST,
    PUBLISHERS_ADD, HOME, LIBRARY
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
import AdminBookList from "../../pages/Admin/List/AdminLibraryLists/AdminBookList/AdminBookList";
import AddBook from "../../pages/Library/Book/AddBook/AddBook";
import AdminCategoryList from "../../pages/Admin/List/AdminLibraryLists/AdminCategoryList/AdminCategoryList";
import AddCategory from "../../pages/Library/Category/AddCategory/AddCategory";
import AdminAuthorList from "../../pages/Admin/List/AdminLibraryLists/AdminAuthorsList/AdminAuthorList";
import AddAuthor from "../../pages/Library/Author/AddAuthor/AddAuthor";
import AdminPublisherList from "../../pages/Admin/List/AdminLibraryLists/AdminPublisherList/AdminPublisherList";
import AddPublisher from "../../pages/Library/Publisher/AddPublisher/AddPublisher";
import Library from "../../pages/Library/Library";

const AdminView = () => {
    return (
        <Routes>
            <Route path={DASHBOARD} element={<AdminDashboard />} />
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

            {/*Library*/}

            <Route path={LIBRARY} element={<Library />} />

            <Route path={BOOKS_LIST} element={<AdminBookList />} />
            <Route path={BOOKS_ADD} element={<AddBook />} />

            <Route path={GENRE_LIST} element={<AdminCategoryList />} />
            <Route path={GENRE_ADD} element={<AddCategory />} />

            <Route path={AUTHORS_LIST} element={<AdminAuthorList />} />
            <Route path={AUTHORS_ADD} element={<AddAuthor />} />

            <Route path={PUBLISHERS_LIST} element={<AdminPublisherList />} />
            <Route path={PUBLISHERS_ADD} element={<AddPublisher />} />

            <Route path={CALENDAR} element={<Calendar />} />


            <Route path={"*"} element={<NotFound />} />
        </Routes>
    )
}

export default AdminView