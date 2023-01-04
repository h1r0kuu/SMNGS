import {BookResponse} from "./book";

export interface BookPublisherRequest {
    title: string,
}

export interface BookPublisherResponse {
    id: number,
    title: string,
    books: BookResponse,
    createdAt: Date,
    updatedAt: Date
}

export interface BookPublisherWithoutBooksResponse {
    id: number,
    title: string,
    createdAt: Date,
    updatedAt: Date
}