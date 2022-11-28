import {axios} from "../config/axios";
import {AxiosResponse} from "axios";
import {SubjectRequest, SubjectResponse, TeacherSubjectRequest, TeacherSubjectResponse} from "../types/subject";
import {API_SUBJECTS, API_TEACHER_SUBJECT} from "../constants/apiConstants";
import {ResponseWithPagination} from "../types/pagination";

export const SubjectService = {
    async create(data: SubjectRequest): Promise<AxiosResponse<SubjectResponse>> {
        return await axios.post<SubjectResponse>(API_SUBJECTS, data)
    },

    async findAll(): Promise<AxiosResponse<ResponseWithPagination<SubjectResponse>>> {
        return await axios.get<ResponseWithPagination<SubjectResponse>>(API_SUBJECTS)
    },
    
    async getTeacherSubject(): Promise<AxiosResponse<ResponseWithPagination<TeacherSubjectResponse>>> {
        return await axios.get<ResponseWithPagination<TeacherSubjectResponse>>(API_TEACHER_SUBJECT);
    },

    async createTeacherSubject(data: TeacherSubjectRequest): Promise<AxiosResponse<TeacherSubjectResponse>> {
        return await axios.post<TeacherSubjectResponse>(API_TEACHER_SUBJECT, data);
    }

}