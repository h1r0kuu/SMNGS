import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {API_LIBRARY_BOOKS, API_LIBRARY_GENRES} from "../constants/apiConstants";
import {BookGenreRequest, BookGenreResponse} from "../types/bookCategory";
import {ResponseWithPagination} from "../types/pagination";
import {GroupResponse} from "../types/group";

export const CategoryService = {
    async create(data: BookGenreRequest): Promise<AxiosResponse<BookGenreResponse>> {
        return await axios.post<BookGenreResponse>(API_LIBRARY_GENRES, data)
    },

    async findAll(): Promise<AxiosResponse<ResponseWithPagination<BookGenreResponse>>> {
        return await axios.get<ResponseWithPagination<BookGenreResponse>>(API_LIBRARY_GENRES)
    }
}