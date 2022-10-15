import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/bootstrap.min.css";
import "./assets/all.min.css";
import "./app.css";

import {Route, Routes} from "react-router-dom";
import {
    ADD_EXPENSE, ADD_FEES,
    ADD_SALARY,
    ADMIN_DASHBOARD,
    CALENDAR,
    DEPARTMENTS_ADD,
    DEPARTMENTS_LIST,
    DEPARTMENTS_VIEW, EVENTS, EXAM_LIST, EXPENSES, FEES, FEES_COLLECTION,
    FORGOT_PASSWORD, HOLIDAY, HOSTEL, LIBRARY,
    LOGIN, MY_PROFILE,
    REGISTRATION, SALARY, SPORT,
    STUDENT_DASHBOARD,
    STUDENTS_ADD,
    STUDENTS_EDIT,
    STUDENTS_LIST,
    STUDENTS_VIEW, SUBJECTS_ADD, SUBJECTS_LIST, SUBJECTS_VIEW,
    TEACHER_DASHBOARD,
    TEACHERS_ADD,
    TEACHERS_EDIT,
    TEACHERS_LIST,
    TEACHERS_VIEW, TIME_TABLE, TRANSPORT
} from "./constants/pathConstants";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import StudentList from "./pages/List/StudentList/StudentList";
import UserView from "./pages/View/UserView";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Calendar from "./pages/Calendar/Calendar";
import StudentEdit from "./pages/Edit/StudentEdit/StudentEdit";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <Routes>
      {/*exact??*/}
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTRATION} element={<Register />} />
        <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />

        <Route path={MY_PROFILE} element={<ProfilePage />} />


        <Route path={ADMIN_DASHBOARD} element={<AdminDashboard />} />
        <Route path={TEACHER_DASHBOARD} element={<TeacherDashboard />} />
        <Route path={STUDENT_DASHBOARD} element={<StudentDashboard />} />

        <Route path={STUDENTS_LIST} element={<StudentList />} />
        <Route path={STUDENTS_VIEW} element={<UserView />} />
        <Route path={STUDENTS_ADD} element={<StudentEdit />} />
        <Route path={STUDENTS_EDIT} element={<StudentEdit />} />

        <Route path={TEACHERS_LIST} element={<StudentList />} />
        <Route path={TEACHERS_VIEW} element={<UserView />} />
        <Route path={TEACHERS_ADD} element={<StudentEdit />} />
        <Route path={TEACHERS_EDIT} element={<StudentEdit />} />

        <Route path={DEPARTMENTS_LIST} element={<StudentList />} />
        <Route path={DEPARTMENTS_VIEW} element={<UserView />} />
        <Route path={DEPARTMENTS_ADD} element={<StudentEdit />} />

        <Route path={SUBJECTS_LIST} element={<StudentList />} />
        <Route path={SUBJECTS_VIEW} element={<UserView />} />
        <Route path={SUBJECTS_ADD} element={<StudentEdit />} />

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
  );
}

export default App;
