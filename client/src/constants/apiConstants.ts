import {UserRole} from "../enums/userRole";

export const HOST = "http://localhost:8080";
export const API_URL = HOST + "/api/v1/";

export const API_USERS = API_URL + "users"
export const API_USER = (username: string | undefined) => API_USERS + `/${username}`
export const API_USERS_ROLE = (role: UserRole) => API_USERS + `/role/${role}`

export const API_SUBJECTS = API_URL + "subjects"
export const API_SUBJECTS_ONE = (subjectId: number) => API_SUBJECTS + `/${subjectId}`
export const API_SUBJECTS_REMOVE_TEACHER = (subjectId: number) => API_SUBJECTS + `/${subjectId}/remove-teacher`
export const API_SUBJECTS_ADD_TEACHER = (subjectId: number) => API_SUBJECTS + `/${subjectId}/add-teacher`

export const API_STUDENTS = API_URL + "students"
export const API_STUDENTS_ONE = (id: number) => `${API_STUDENTS}/${id}`

export const API_SCHEDULES = API_URL + "schedules"

export const API_GROUPS = API_URL + "groups"
export const API_GROUPS_ONE = (groupId: number) => API_GROUPS + `/${groupId}`
export const API_GROUPS_STUDENTS = (groupId: number) => API_GROUPS + `/${groupId}/students`
export const API_GROUPS_REMOVE_STUDENT = (groupId: number) => API_GROUPS + `/${groupId}/remove-student`
export const API_GROUPS_ADD_STUDENT = (groupId: number) => API_GROUPS + `/${groupId}/add-student`

export const API_GRADES = API_URL + "grades"
export const API_GRADES_ONE = (gradeId: number) => API_GRADES + `/${gradeId}`

export const API_AUTH = API_URL + "auth"
export const API_AUTH_REGISTRATION = API_AUTH + "registration"
export const API_AUTH_LOGIN = API_AUTH + "login"
