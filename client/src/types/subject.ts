import {UserResponse} from "./user";

export interface SubjectResponse {
    id: number,
    subjectName: string,
    teachers: UserResponse[],
    createdAt: Date,
    updatedAt: Date
}