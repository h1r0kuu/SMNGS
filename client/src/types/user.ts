import {UserRole} from "../enums/userRole";
import {UserGender} from "../enums/useGender";

export interface UserResponse {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    role: UserRole,
    gender: UserGender,
    email: string,
    profilePicture: string,
    phoneNumber: string,
    phoneCode: string,
    lastLogin: Date,
    lastLoginIp: string,
    createdAt: Date,
    updatedAt: Date
}

export interface UserRequest {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    role: UserRole,
    gender: UserGender,
    email: string,
    profilePicture?: File | string,
    phoneNumber: string,
    phoneCode: string
}