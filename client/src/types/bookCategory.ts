import {BookResponse} from "./book";

export interface BookCategoryRequest {
    title: string
}

export interface BookCategoryResponse {
    id: number,
    title: string,
    books: BookResponse[],
    createdAt: Date,
    updatedAt: Date
}

export interface BookCategoryWithoutBooksResponse {
    id: number,
    title: string,
    createdAt: Date,
    updatedAt: Date
}