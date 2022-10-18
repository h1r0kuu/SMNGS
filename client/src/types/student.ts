import {UserRequest, UserResponse} from "./user";
import {StudentStatus} from "../enums/studentStatus";
import {UserRole} from "../enums/userRole";

export interface StudentResponse extends UserResponse {
    status: StudentStatus,
    term: number,
    specialization: string,
    degreeCourse: string,
    birthDate: Date,
    fatherName: string,
    fatherMobile: string,
    fatherEmail: string,
    motherName: string,
    motherMobile: string,
    motherEmail: string,
    presentAddress: string,
    permanentAddress: string
    // private StudentGroupResponse group;
}

export interface StudentRequest extends UserRequest {
    status: StudentStatus,
    term: number,
    specialization: string,
    degreeCourse: string,
    birthDate: Date,
    fatherName: string,
    fatherMobile: string,
    fatherEmail: string,
    motherName: string,
    motherMobile: string,
    motherEmail: string,
    presentAddress: string,
    permanentAddress: string
}

export interface StudentEditRequest extends StudentRequest {
    id: number,
}