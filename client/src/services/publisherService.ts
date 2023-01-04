import {axios} from "../config/axios";
import {API_LIBRARY_PUBLISHERS} from "../constants/apiConstants";
import {AxiosResponse} from "axios";
import {ResponseWithPagination} from "../types/pagination";
import {BookPublisherRequest, BookPublisherResponse, BookPublisherWithoutBooksResponse} from "../types/bookPublisher";

export const PublisherService = {
    async create(data: BookPublisherRequest): Promise<AxiosResponse<BookPublisherResponse>> {
        return await axios.post<BookPublisherResponse>(API_LIBRARY_PUBLISHERS, data)
    },

    async findAll(): Promise<AxiosResponse<ResponseWithPagination<BookPublisherWithoutBooksResponse>>> {
        return await axios.get<ResponseWithPagination<BookPublisherWithoutBooksResponse>>(API_LIBRARY_PUBLISHERS)
    }
}