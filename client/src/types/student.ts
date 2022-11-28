import {UserRequest, UserResponse} from "./user";
import {StudentStatus} from "../enums/studentStatus";
import {GroupResponse} from "./group";

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
    group: GroupResponse
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
    permanentAddress: string,
    groupId: number | undefined
}

export interface StudentEditRequest extends StudentRequest {
//    data: {};
    id: number,
}