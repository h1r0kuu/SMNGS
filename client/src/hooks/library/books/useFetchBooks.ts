import {useCallback, useEffect, useState} from "react";
import {GroupResponse} from "../../../types/group";

import {GroupService} from "../../../services/groupService"
import {PaginationProps, PaginationPropsDefault} from "../../../types/pagination";
import {BookService} from "../../../services/bookService";
import {BookResponse} from "../../../types/book";

export const useFetchBooks = () => {
    const [books, setBooks] = useState<BookResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchBooks = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await BookService.findAll()
                const { content, ...pagination } = data
                setBooks(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchBooks().catch()
    }, [fetchBooks])

    return {books, pagination, fetchBooks, isLoading}
}