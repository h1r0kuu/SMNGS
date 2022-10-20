import {STUDENTS_EDIT, STUDENTS_VIEW} from "../constants/pathConstants";

export const MakeUrl = {
    editStudent(studentId: number) {
        return STUDENTS_EDIT.replace(":id", studentId.toString())
    },

    viewUser(username: string) {
        return STUDENTS_VIEW.replace(":username", username)
    }
}