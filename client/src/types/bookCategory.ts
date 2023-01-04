import {BookResponse} from "./book";

export interface BookGenreRequest {
    title: string
}

export interface BookGenreResponse {
    id: number,
    title: string,
    books: BookResponse[],
    createdAt: Date,
    updatedAt: Date
}

export interface BookGenreWithoutBooksResponse {
    id: number,
    title: string,
    createdAt: Date,
    updatedAt: Date
}