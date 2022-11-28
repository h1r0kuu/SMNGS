import {ReactElement} from "react";
import AdminView from "./AdminView/AdminView";
import {UserRole} from "../enums/userRole";
import TeacherView from "./TeacherView/TeacherView";
import StudentView from "./StudentView/StudentView";
import UnauthorizedView from "./UnauthorizedView/UnauthorizedView";

import {useCurrentUser} from "../context/UserContext";


const Views = (): ReactElement => {
    const user = useCurrentUser()

    if(user.role === UserRole.ADMIN) {
        return <AdminView/>
    } else if(user.role === UserRole.TEACHER) {
        return <TeacherView />
    } else if(user.role === UserRole.STUDENT) {
        return <StudentView />
    } else if(user.role === UserRole.HELPER) {
        return <></>
    }

    return <UnauthorizedView />
}

export default Views