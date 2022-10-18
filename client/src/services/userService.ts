import {axios} from "../config/axios";
import {UserResponse} from "../types/user";
import {API_USERS} from "../constants/apiConstants";
import {AxiosResponse} from "axios";

export const UserService = {
    async getAllUsers(): Promise<AxiosResponse<UserResponse[]>> {
        return await axios.get<UserResponse[]>(API_USERS);
    }
}