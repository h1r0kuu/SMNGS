import {FC, ReactElement} from "react";
import {Col, Row} from "react-bootstrap";

interface PaginationProps {

}

const Pagination: FC<PaginationProps> = (): ReactElement => {
    return (
        <Row style={{alignItems: "center", marginTop: "20px"}}>
            <Col sm={12} md={5}>
                <div className="dataTables_info" id="DataTables_Table_0_info" role="status"
                     aria-live="polite">Showing 1 to 10 of 11 entries
                </div>
            </Col>
            <Col sm={12} md={7}>
                <div className="dataTables_paginate paging_simple_numbers"
                     id="DataTables_Table_0_paginate">
                    <ul className="pagination">
                        <li className="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous">
                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0"
                               tabIndex={0} className="page-link">Previous</a>
                        </li>
                        <li className="paginate_button page-item active">
                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1"
                               tabIndex={0} className="page-link">1</a>
                        </li>
                        <li className="paginate_button page-item ">
                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2"
                               tabIndex={0} className="page-link">2</a>
                        </li>
                        <li className="paginate_button page-item next"
                            id="DataTables_Table_0_next">
                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="3"
                               tabIndex={0} className="page-link">Next</a>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    )
}

export default Pagination