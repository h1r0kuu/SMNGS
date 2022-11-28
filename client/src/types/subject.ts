import {UserResponse} from "./user";
import {TeacherResponse} from "./teacher";

export interface SubjectRequest {
    subjectName: string,
    teacherIds: number[],
}

export interface SubjectResponse {
    id: number,
    subjectName: string,
    teachers: UserResponse[],
    createdAt: Date,
    updatedAt: Date
}

export interface TeacherSubjectRequest {
    subjectId: number,
    teacherId: number
}

export interface TeacherSubjectResponse {
    id: number,
    teacher: TeacherResponse,
    subject: SubjectResponse
}