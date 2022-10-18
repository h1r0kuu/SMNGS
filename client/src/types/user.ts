import {UserRole} from "../enums/userRole";

export interface UserResponse {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    role: UserRole,
    email: string,
    profilePicture: File,
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
    email: string,
    profilePicture: File,
    phoneNumber: string,
    phoneCode: string
}