import {BookGenreWithoutBooksResponse} from "./bookCategory";
import {AuthorWithoutBooksResponse} from "./bookAuthor";
import {BookPublisherWithoutBooksResponse} from "./bookPublisher";

export interface BookRequest {
    title: string,
    genres: number[],
    publisher: BookPublisherWithoutBooksResponse,
    authors: number[],
    frontPicture: File
}

export interface BookResponse {
    id: number,
    title: string,
    genres: BookGenreWithoutBooksResponse[],
    publisher: BookPublisherWithoutBooksResponse,
    authors: AuthorWithoutBooksResponse[],
    frontPicture: string
}