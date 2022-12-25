import {useCallback, useEffect, useState} from "react";
import {BookCategoryResponse} from "../../types/bookCategory";
import {PaginationProps, PaginationPropsDefault} from "../../types/pagination";
import {CategoryService} from "../../services/categoryService";

export const useFetchCategories = () => {
    const [categories, setCategories] = useState<BookCategoryResponse[]>([])
    const [pagination, setPagination] = useState<PaginationProps>(PaginationPropsDefault)
    const [isLoading, setLoading] = useState(false)

    const fetchCategories = useCallback(
        async () => {
            setLoading(true)
            try {
                const {data} = await CategoryService.findAll()
                const { content, ...pagination } = data
                setCategories(content);
                setPagination(pagination)
            } catch (e) {

            }
            setLoading(false)
        }
        , [])

    useEffect(() => {
        fetchCategories().catch()
    }, [fetchCategories])

    return {categories, fetchCategories, pagination, isLoading}
}