import {UserRole} from "../enums/userRole";

export interface UserResponse {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    role: UserRole,
    email: string,
    profilePicture: string,
    phoneNumber: number,
    phoneCode: number,
    lastLogin: Date,
    lastLoginIp: string,
    createdAt: Date,
    updatedAt: Date
}