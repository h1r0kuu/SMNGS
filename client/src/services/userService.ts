import {axios} from "../config/axios";
import {UserResponse} from "../types/user";
import {API_STUDENTS, API_USER, API_USERS} from "../constants/apiConstants";
import {AxiosResponse} from "axios";

export const UserService = {
    async getAllUsers(): Promise<AxiosResponse<UserResponse[]>> {
        return await axios.get<UserResponse[]>(API_USERS);
    },

    async getByUsername(username: string | undefined): Promise<AxiosResponse<UserResponse>> {
        return await axios.get<UserResponse>(API_USER(username))
    }
}