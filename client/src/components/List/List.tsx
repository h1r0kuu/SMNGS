import {Children, FC, ReactElement} from "react";
import {Card, Col, Row, Table} from "react-bootstrap";

const List = ({ children }): ReactElement => {

    let headers: ReactElement[] = [], trs: ReactElement[] = [];

    Children.forEach(children, child => {
        if(child !== null) {
            if (child.type === List.Header) {
                return headers.push(child)
            }

            if (child.type === List.BodyTr) {
                return trs.push(child)
            }
        }
    })

    return (
        <Row>
            <Col sm={12}>
                <Card className={"card-table"}>
                    <Card.Body>
                        <Col className="table-responsive">
                            <Col className="dataTables_wrapper dt-bootstrap4 no-footer">
                                <Row>
                                    <Col sm={12} md={6}>
                                        <div className="dataTables_length" id="DataTables_Table_0_length">
                                            <label>Show <select name="DataTables_Table_0_length"
                                                                aria-controls="DataTables_Table_0"
                                                                className="custom-select custom-select-sm form-control form-control-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select> entries </label>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}></Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <Table hover responsive className="table-center mb-0 datatable dataTable no-footer">
                                            <thead>
                                                <tr role={"row"}>
                                                    {/*<th className={"sorting"}>ID</th>*/}
                                                    {/*<th className={"sorting"}>Name</th>*/}
                                                    {/*<th className={"sorting"}>Class</th>*/}
                                                    {/*<th className={"sorting"}>DOB</th>*/}
                                                    {/*<th className={"sorting"}>Parent Name</th>*/}
                                                    {/*<th className={"sorting"}>Mobile Number</th>*/}
                                                    {/*<th className={"sorting"}>Address</th>*/}
                                                    {/*<th className="text-right">Action</th>*/}
                                                    {headers.map(header => (
                                                        header
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {trs.map(tr => (
                                                    tr
                                                ))}
                                                {/*<tr className={"odd"}>*/}
                                                {/*    <td>PRE2209</td>*/}
                                                {/*    <td>*/}
                                                {/*        <h2 className="table-avatar">*/}
                                                {/*            <a href="student-details.html">Aaliyah</a>*/}
                                                {/*        </h2>*/}
                                                {/*    </td>*/}
                                                {/*    <td>10 A</td>*/}
                                                {/*    <td>2 Feb 2002</td>*/}
                                                {/*    <td>Jeffrey Wong</td>*/}
                                                {/*    <td>097 3584 5870</td>*/}
                                                {/*    <td>911 Deer Ridge Drive,USA</td>*/}
                                                {/*    <td className="text-right">*/}
                                                {/*        <div className="actions">*/}
                                                {/*            <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">*/}
                                                {/*                <FontAwesomeIcon icon={faPen}/>*/}
                                                {/*            </a>*/}
                                                {/*            <a href="#" className="btn btn-sm bg-danger-light">*/}
                                                {/*                <FontAwesomeIcon icon={faTrash}/>*/}
                                                {/*            </a>*/}
                                                {/*        </div>*/}
                                                {/*    </td>*/}
                                                {/*</tr>*/}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
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
                            </Col>
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

List.Header = ({ title }) => <th className={"sorting"}>{title}</th>
List.BodyTr = ({ children }) => <tr>{children}</tr>

interface BodyElemProps {
    children: ReactElement | ReactElement[] | any,
    className?: string
}
const BodyElem: FC<BodyElemProps> = ({ children, className }) => <td className={className}>{children}</td>

List.BodyElem = BodyElem

export default List;