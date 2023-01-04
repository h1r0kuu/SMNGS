import {useCallback, useEffect, useState} from "react";
import {PaginationProps, PaginationPropsDefault} from "../../types/pagination";
import {BookPublisherWithoutBooksResponse} from "../../types/bookPublisher";
import {PublisherService} from "../../services/publisherService";

export const useFetchPublishers = () => {
    const [publishers, setPublishers] = useState<BookPublisherWithoutBooksResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchPublishers = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await PublisherService.findAll()
                const { content, ...pagination } = data
                setPublishers(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchPublishers().catch()
    }, [fetchPublishers])

    return {publishers, fetchPublishers, pagination, isLoading}
}