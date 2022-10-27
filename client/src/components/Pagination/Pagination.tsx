import {FC, Fragment, ReactElement} from "react";
import {Col, Row} from "react-bootstrap";
import {PaginationProps} from "../../types/pagination";
import {Link} from "react-router-dom";

interface Props {
    pagination: PaginationProps
}

const Pagination: FC<Props> = ({pagination}): ReactElement => {

    const hasPrevious = () => {
        return pagination.pageable.pageNumber !== 0
    }
    const currentPage = () => {
        return pagination.pageable.pageNumber
    }
    const hasNext = () => {
        return pagination.pageable.pageNumber + 1 < pagination.totalPages
    }

    return (
        <Row style={{alignItems: "center", marginTop: "20px"}}>
            <Col sm={12} md={5}>
                <div className="dataTables_info" id="DataTables_Table_0_info" role="status"
                     aria-live="polite">Showing {pagination.size * ((pagination.pageable.pageNumber + 1) - 1)} to {(pagination.pageable.pageNumber + 1) * pagination.size} of {pagination.totalElements} entries
                </div>
            </Col>
            <Col sm={12} md={7}>
                <div className="dataTables_paginate paging_simple_numbers"
                     id="DataTables_Table_0_paginate">
                    <ul className="pagination">
                        <Link to={'#'} className={"paginate_button page-item previous " + (!hasPrevious() && "disabled")}
                            id="DataTables_Table_0_previous">
                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0"
                               tabIndex={0} className="page-link">Previous</a>
                        </Link>
                        {Array.from(Array(pagination.totalPages), (e, i) => (
                            <Fragment key={i}>
                                {(i > currentPage() - 2 && i < currentPage() + 2) &&
                                    <Link to={"#"} className={"paginate_button page-item " + ((currentPage() === i) && "active")}>
                                        <a href="#" aria-controls="DataTables_Table_0" className="page-link">{i + 1}</a>
                                    </Link>
                                }
                            </Fragment>
                        ))}
                        <Link to={"#"} className={"paginate_button page-item next " + (!hasNext() && "disabled")}
                            id="DataTables_Table_0_next">
                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="3"
                               tabIndex={0} className="page-link">Next</a>
                        </Link>
                    </ul>
                </div>
            </Col>
        </Row>
    )
}

export default Pagination