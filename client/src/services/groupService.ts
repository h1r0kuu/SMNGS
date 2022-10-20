import {SubjectRequest, SubjectResponse} from "../types/subject";
import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {API_GROUPS, API_SUBJECTS} from "../constants/apiConstants";
import {GroupRequest} from "../types/group";

export const GroupService = {
    async create(data: GroupRequest): Promise<AxiosResponse<GroupRequest>> {
        return await axios.post<GroupRequest>(API_GROUPS, data)
    }
}