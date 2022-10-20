import {axios} from "../config/axios";
import {AxiosResponse} from "axios";
import {SubjectRequest, SubjectResponse} from "../types/subject";
import {API_SUBJECTS} from "../constants/apiConstants";

export const SubjectService = {
    async create(data: SubjectRequest): Promise<AxiosResponse<SubjectRequest>> {
        return await axios.post<SubjectResponse>(API_SUBJECTS, data)
    }
}