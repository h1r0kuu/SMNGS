import {GROUP_EDIT, GROUP_STUDENTS, STUDENTS_EDIT, STUDENTS_VIEW, TEACHERS_EDIT} from "../constants/pathConstants";

export const MakeUrl = {
    editStudent(studentId: number) {
        return STUDENTS_EDIT.replace(":id", studentId.toString())
    },

    editTeacher(teacherId: number) {
        return TEACHERS_EDIT.replace(":id", teacherId.toString())
    },

    editGroup(groupId: number) {
        return GROUP_EDIT.replace(":id", groupId.toString())
    },

    viewUser(username: string) {
        return STUDENTS_VIEW.replace(":username", username)
    },

    groupStudents(id: number) {
        return GROUP_STUDENTS.replace(":id", id.toString())
    }
}