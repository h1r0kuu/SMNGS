import {AxiosResponse} from "axios";
import {UserResponse} from "../types/user";
import {axios} from "../config/axios";
import {
    API_STUDENTS,
    API_STUDENTS_ONE, API_TEACHER_GROUPS,
    API_TEACHERS,
    API_TEACHERS_ONE,
    API_USER,
    API_USERS
} from "../constants/apiConstants";
import {TeacherEditRequest, TeacherRequest, TeacherResponse} from "../types/teacher";
import {StudentEditRequest, StudentResponse} from "../types/student";
import {ResponseWithPagination} from "../types/pagination";
import {GroupResponse} from "../types/group";

export const TeacherService = {
    async create(data: TeacherRequest): Promise<AxiosResponse<TeacherResponse>> {
        return await axios.post<TeacherResponse>(API_TEACHERS, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    },

    async update(teacher: TeacherEditRequest): Promise<AxiosResponse<TeacherResponse>> {
        return await axios.put<TeacherResponse>(API_TEACHERS, teacher, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },

    async getAllTeachers(): Promise<AxiosResponse<ResponseWithPagination<TeacherResponse>>> {
        return await axios.get<ResponseWithPagination<TeacherResponse>>(API_TEACHERS);
    },

    async getByUsername(username: string | undefined): Promise<AxiosResponse<TeacherResponse>> {
        return await axios.get<TeacherResponse>(API_USER(username))
    },

    async getOne(id: number): Promise<AxiosResponse<TeacherResponse>> {
        return await axios.get<TeacherResponse>(API_TEACHERS_ONE(id));
    },

    async getGroups(id: number): Promise<AxiosResponse<ResponseWithPagination<GroupResponse>>> {
        return await axios.get<ResponseWithPagination<GroupResponse>>(API_TEACHER_GROUPS(id))
    }

}