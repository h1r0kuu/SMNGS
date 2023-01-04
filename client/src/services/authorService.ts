import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {API_LIBRARY_AUTHORS} from "../constants/apiConstants";
import {BookAuthorRequest, BookAuthorResponse} from "../types/bookAuthor";
import {ResponseWithPagination} from "../types/pagination";

export const AuthorService = {
    async create(data: BookAuthorRequest): Promise<AxiosResponse<BookAuthorResponse>> {
        return await axios.post<BookAuthorResponse>(API_LIBRARY_AUTHORS, data)
    },

    async findAll(): Promise<AxiosResponse<ResponseWithPagination<BookAuthorResponse>>> {
        return await axios.get<ResponseWithPagination<BookAuthorResponse>>(API_LIBRARY_AUTHORS)
    }
}