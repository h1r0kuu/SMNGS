import {BookCategoryWithoutBooksResponse} from "./bookCategory";
import {AuthorWithoutBooksResponse} from "./bookAuthor";

export interface BookResponse {
    id: number,
    title: string,
    category: BookCategoryWithoutBooksResponse,
    // publisher:
    authors: AuthorWithoutBooksResponse,
    frontPicture: string,

}