import {UserResponse} from "./user";
import {StudentStatus} from "../enums/studentStatus";

export interface StudentResponse {
    id: number,
    info: UserResponse,
    status: StudentStatus,
    term: number,
    specialization: string,
    degreeCourse: string,
    birthDate: Date,
    address: string
    // private StudentGroupResponse group;
    createdAt: Date,
    updatedAt: Date
}