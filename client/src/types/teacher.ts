import {UserRequest, UserResponse} from "./user";

export interface TeacherResponse extends UserResponse {
    qualification: string
}
export interface TeacherRequest extends UserRequest {
    qualification: string
}

export interface TeacherEditRequest extends TeacherRequest {
    id: number
}