import {SubjectRequest, SubjectResponse} from "../types/subject";
import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {API_GROUPS, API_SUBJECTS} from "../constants/apiConstants";
import {GroupRequest, GroupResponse} from "../types/group";

export const GroupService = {
    async create(data: GroupRequest): Promise<AxiosResponse<GroupResponse>> {
        return await axios.post<GroupResponse>(API_GROUPS, data)
    },

    async findAll(): Promise<AxiosResponse<GroupResponse[]>> {
        return await axios.get<GroupResponse[]>(API_GROUPS)
    }
}