import {UserResponse} from "./user";
import {TeacherResponse} from "./teacher";
import {StudentResponse} from "./student";

export interface AuthLogin {
    username: string,
    password: string
}

export interface AuthResponse {
    user: UserResponse | TeacherResponse | StudentResponse,
    token: string
}