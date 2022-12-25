import {BookResponse} from "./book";

export interface BookAuthorRequest {
    firstName: string,
    lastName: string
}

export interface BookAuthorResponse {
    id: number
    firstName: string,
    lastName: string,
    books: BookResponse[],
    createdAt: Date,
    updatedAt: Date
}

export interface AuthorWithoutBooksResponse {
    id: number
    firstName: string,
    lastName: string,
    createdAt: Date,
    updatedAt: Date
}