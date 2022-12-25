import {AxiosResponse} from "axios";
import {axios} from "../config/axios";
import {API_LIBRARY_BOOKS, API_LIBRARY_CATEGORIES} from "../constants/apiConstants";
import {BookCategoryRequest, BookCategoryResponse} from "../types/bookCategory";
import {ResponseWithPagination} from "../types/pagination";
import {GroupResponse} from "../types/group";

export const CategoryService = {
    async create(data: BookCategoryRequest): Promise<AxiosResponse<BookCategoryResponse>> {
        return await axios.post<BookCategoryResponse>(API_LIBRARY_CATEGORIES, data)
    },

    async findAll(): Promise<AxiosResponse<ResponseWithPagination<BookCategoryResponse>>> {
        return await axios.get<ResponseWithPagination<BookCategoryResponse>>(API_LIBRARY_CATEGORIES)
    }
}