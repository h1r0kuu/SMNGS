import {useCallback, useEffect, useState} from "react";
import {BookResponse} from "../../../types/book";
import {PaginationProps, PaginationPropsDefault} from "../../../types/pagination";
import {BookService} from "../../../services/bookService";
import {BookAuthorResponse} from "../../../types/bookAuthor";
import {AuthorService} from "../../../services/authorService";

export const useFetchAuthors = () => {
    const [authors, setAuthors] = useState<BookAuthorResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchAuthors = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await AuthorService.findAll()
                const { content, ...pagination } = data
                setAuthors(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchAuthors().catch()
    }, [fetchAuthors])

    return {authors, pagination, fetchAuthors, isLoading}
}