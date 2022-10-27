export interface PaginationProps {
    pageable: {
        pageSize: number,
        pageNumber: number
    },
    totalPages:	number,
    totalElements: number,
    size: number,
    number: number,
}

export interface ResponseWithPagination<T> extends PaginationProps {
    content: T[]

}
