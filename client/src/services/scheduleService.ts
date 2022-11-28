import {GroupRequest, GroupResponse} from "../types/group";
import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {API_GROUPS, API_GROUPS_ONE, API_SCHEDULES, API_SCHEDULES_ONE} from "../constants/apiConstants";
import {ResponseWithPagination} from "../types/pagination";
import {ScheduleRequest, ScheduleResponse} from "../types/schedule";

export const ScheduleService = {
    async create(data: ScheduleRequest): Promise<AxiosResponse<ScheduleResponse>> {
        return await axios.post<ScheduleResponse>(API_SCHEDULES, data)
    },

    async update(data: ScheduleRequest): Promise<AxiosResponse<ScheduleResponse>> {
        return await axios.put<ScheduleResponse>(API_SCHEDULES, data)
    },

    async findAll(): Promise<AxiosResponse<ScheduleResponse[]>> {
        return await axios.get<ScheduleResponse[]>(API_SCHEDULES)
    },

    async findOne(id: number): Promise<AxiosResponse<ScheduleResponse>> {
        return await axios.get<ScheduleResponse>(API_SCHEDULES_ONE(id))
    },
}