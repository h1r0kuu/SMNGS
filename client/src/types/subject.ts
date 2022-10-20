import {UserResponse} from "./user";

export interface SubjectRequest {
    subjectName: string,
    // teachers: UserResponse[],
}

export interface SubjectResponse {
    id: number,
    subjectName: string,
    teachers: UserResponse[],
    createdAt: Date,
    updatedAt: Date
}