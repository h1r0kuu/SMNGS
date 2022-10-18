import React from 'react';

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
    FORGOT_PASSWORD, HOLIDAY, HOME, HOSTEL, LIBRARY,
    LOGIN, MY_PROFILE,
    REGISTRATION, SALARY, SPORT,
    STUDENT_DASHBOARD,
    STUDENTS_ADD,
    STUDENTS_EDIT,
    STUDENTS_LIST,
    STUDENTS_VIEW, SUBJECTS_ADD, SUBJECTS_EDIT, SUBJECTS_LIST,
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
import StudentEdit from "./pages/Edit/StudentEdit";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import StudentAdd from "./pages/Add/StudentAdd";
import TeacherAdd from "./pages/Add/TeacherAdd";
import TeacherEdit from "./pages/Edit/TeacherEdit";
import SubjectAdd from "./pages/Add/SubjectAdd";
import SubjectEdit from "./pages/Edit/SubjectEdit";
import Views from "./views/Views";

function App() {
  return (
    <Views />
  );
}

export default App;