import {AuthLogin, AuthResponse} from "../types/auth";
import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {API_AUTH_LOGIN, API_LIBRARY_BOOKS} from "../constants/apiConstants";
import {ResponseWithPagination} from "../types/pagination";
import {BookRequest, BookResponse} from "../types/book";

export const BookService = {
    async create(data: BookRequest): Promise<AxiosResponse<BookResponse>> {
        return await axios.post<BookResponse>(API_LIBRARY_BOOKS, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    },

    async findAll(): Promise<AxiosResponse<ResponseWithPagination<BookResponse>>> {
        return await axios.get<ResponseWithPagination<BookResponse>>(API_LIBRARY_BOOKS)
    }
}