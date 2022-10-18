import {axios} from "../config/axios";
import {AxiosResponse} from "axios";
import {StudentEditRequest, StudentRequest, StudentResponse} from "../types/student";
import {API_STUDENTS, API_STUDENTS_ONE} from "../constants/apiConstants";

export const StudentService = {
    async getAll(): Promise<AxiosResponse<StudentResponse[]>> {
        return await axios.get<StudentResponse[]>(API_STUDENTS);
    },

    async create(student: StudentRequest): Promise<AxiosResponse<StudentResponse>> {
        return await axios.post<StudentResponse>(API_STUDENTS, student);
    },

    async update(student: StudentEditRequest): Promise<AxiosResponse<StudentResponse>> {
        return await axios.put<StudentResponse>(API_STUDENTS, student);
    },

    async getOne(id: number): Promise<AxiosResponse<StudentResponse>> {
        return await axios.get<StudentResponse>(API_STUDENTS_ONE(id));
    },
}