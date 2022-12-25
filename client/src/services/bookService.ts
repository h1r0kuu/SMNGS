import {AuthLogin, AuthResponse} from "../types/auth";
import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {API_AUTH_LOGIN, API_LIBRARY_BOOKS} from "../constants/apiConstants";
import {ResponseWithPagination} from "../types/pagination";
import {BookResponse} from "../types/book";

export const BookService = {
    async findAll(): Promise<AxiosResponse<ResponseWithPagination<BookResponse>>> {
        return await axios.get<ResponseWithPagination<BookResponse>>(API_LIBRARY_BOOKS)
    }
}