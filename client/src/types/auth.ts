import {UserResponse} from "./user";

export interface AuthResponse {
    user: UserResponse,
    token: string
}