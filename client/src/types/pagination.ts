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

export const PaginationPropsDefault = {
    pageable: {
        pageSize: 0,
        pageNumber: 0
    },
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0
}

export interface ResponseWithPagination<T> extends PaginationProps {
    content: T[]

}
