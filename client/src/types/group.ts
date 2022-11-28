import {TeacherSubjectResponse} from "./subject";

export interface GroupRequest {
    groupTerm: number,
    groupName: string,
    teacherSubjects: TeacherSubjectResponse[]
    // private List<GroupStudentResponse> students;
}

export interface GroupSubjectRequest {
    groupSubjectIds: number
}

export interface GroupSubjectResponse {
    id: number,
    teacherSubject: TeacherSubjectResponse
}

export interface GroupResponse {
    id: number,
    groupTerm: number,
    groupName: string,
    // private List<GroupStudentResponse> students;
    groupSubjects: GroupSubjectResponse[]
    createdAt: Date,
    updatedAt: Date,
}