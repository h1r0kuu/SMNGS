import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {AuthLogin, AuthResponse} from "../types/auth";
import {API_AUTH_CHECK_TOKEN, API_AUTH_LOGIN} from "../constants/apiConstants";
import {UserResponse} from "../types/user";

export const AuthService = {

    async login(data: AuthLogin): Promise<AxiosResponse<AuthResponse>> {
        return await axios.post<AuthResponse>(API_AUTH_LOGIN, data)
    },

    async registration() {

    },

    async logout() {

    },

    async checkToken(token: string): Promise<AxiosResponse<AuthResponse>> {
        return await axios.get<AuthResponse>(API_AUTH_CHECK_TOKEN(token))
    }
}