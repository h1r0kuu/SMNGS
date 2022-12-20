import {SubjectRequest, SubjectResponse, TeacherSubjectResponse} from "../types/subject";
import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {
    API_GROUP_SUBJECTS,
    API_GROUPS, API_GROUPS_ADD_STUDENT, API_GROUPS_ADD_SUBJECT, API_GROUPS_ADD_TEACHER,
    API_GROUPS_ONE, API_GROUPS_REMOVE_STUDENT, API_GROUPS_REMOVE_SUBJECT, API_GROUPS_REMOVE_TEACHER,
    API_GROUP_SCHEDULES,
    API_GROUP_STUDENTS, API_GROUP_TEACHERS,
} from "../constants/apiConstants";
import {GroupRequest, GroupResponse, GroupSubjectRequest} from "../types/group";
import {ResponseWithPagination} from "../types/pagination";
import {StudentResponse} from "../types/student";
import {ScheduleResponse} from "../types/schedule";
import {TeacherResponse} from "../types/teacher";

export const GroupService = {
    async create(data: GroupRequest): Promise<AxiosResponse<GroupResponse>> {
        return await axios.post<GroupResponse>(API_GROUPS, data)
    },

    async update(data: GroupRequest): Promise<AxiosResponse<GroupResponse>> {
        return await axios.put<GroupResponse>(API_GROUPS, data)
    },

    async findAll(): Promise<AxiosResponse<ResponseWithPagination<GroupResponse>>> {
        return await axios.get<ResponseWithPagination<GroupResponse>>(API_GROUPS)
    },

    async findOne(id: number): Promise<AxiosResponse<GroupResponse>> {
        return await axios.get<GroupResponse>(API_GROUPS_ONE(id))
    },

    async getStudents(groupId: number): Promise<AxiosResponse<ResponseWithPagination<StudentResponse>>> {
        return await axios.get<ResponseWithPagination<StudentResponse>>(API_GROUP_STUDENTS(groupId))
    },

    async getSubjects(groupId: number): Promise<AxiosResponse<ResponseWithPagination<SubjectResponse>>> {
        return await axios.get<ResponseWithPagination<SubjectResponse>>(API_GROUP_SUBJECTS(groupId))
    },

    async getTeachers(groupId: number): Promise<AxiosResponse<ResponseWithPagination<TeacherResponse>>> {
        return await axios.get<ResponseWithPagination<TeacherResponse>>(API_GROUP_TEACHERS(groupId))
    },

    async getSchedule(groupId: number): Promise<AxiosResponse<ScheduleResponse[]>> {
        const res = await axios.get<ScheduleResponse[]>(API_GROUP_SCHEDULES(groupId))
        res.data.forEach(schedule => {
            schedule.timeStart = new Date(schedule.timeStart)
            schedule.timeEnd = new Date(schedule.timeEnd)
        })
        return res
    },

    async createGroupSubject(data: GroupSubjectRequest){
      // return await axios.post<TeacherSubjectResponse>(API_GROUP_SUBJECTS, data)
        return ''
    },


    async addStudent(groupId: number, studentId: number): Promise<AxiosResponse<GroupResponse>> {
        return await axios.patch<GroupResponse>(API_GROUPS_ADD_STUDENT(groupId), {studentId: studentId})
    },

    async removeStudent(groupId: number, studentId: number): Promise<AxiosResponse<GroupResponse>> {
        return await axios.patch<GroupResponse>(API_GROUPS_REMOVE_STUDENT(groupId), {studentId: studentId})
    },

    async addTeacher(groupId: number, teacherId: number): Promise<AxiosResponse<GroupResponse>> {
        return await axios.patch<GroupResponse>(API_GROUPS_ADD_TEACHER(groupId), {teacherId: teacherId})
    },

    async removeTeacher(groupId: number, teacherId: number): Promise<AxiosResponse<GroupResponse>> {
        return await axios.patch<GroupResponse>(API_GROUPS_REMOVE_TEACHER(groupId), {teacherId: teacherId})
    },

    async addSubject(groupId: number, subjectId: number): Promise<AxiosResponse<GroupResponse>> {
        return await axios.patch<GroupResponse>(API_GROUPS_ADD_SUBJECT(groupId), {subjectId: subjectId})
    },

    async removeSubject(groupId: number, subjectId: number): Promise<AxiosResponse<GroupResponse>> {
        return await axios.patch<GroupResponse>(API_GROUPS_REMOVE_SUBJECT(groupId), {subjectId: subjectId})
    }
}