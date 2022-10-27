import {Children, FC, ReactElement} from "react";
import {Card, Col, Row, Table} from "react-bootstrap";
import Pagination from "../Pagination/Pagination";
import {PaginationProps} from "../../types/pagination";



interface ListProps {
    children: ReactElement[] | ReactElement
    isLoading?: boolean,
    pagination?: PaginationProps
}

const List: FC<ListProps> = ({ children, isLoading, pagination }): ReactElement => {

    let tableBody: ReactElement = <></>, headers: ReactElement[] = [], trs: ReactElement[] = [];

    Children.forEach(children, child => {
        if(child !== null) {
            if (child.type === ListHeader) {
                return headers.push(child)
            }

            if (child.type === ListBodyTr) {
                return trs.push(child)
            }

            if(child.type === TableBody) {
                return tableBody = child

            }
        }
    })
    return (
        <>
        {isLoading
        ?
            <>p</>
        :
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
                                                        {headers.map(header => (
                                                            header
                                                        ))}
                                                    </tr>
                                                </thead>
                                                {tableBody}
                                            </Table>
                                        </Col>
                                    </Row>
                                    {pagination &&
                                        <Pagination pagination={pagination} />
                                    }
                                </Col>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        }
        </>
    )
}

interface ListHeader {
    title: string
}
export const ListHeader: FC<ListHeader> = ({ title }): ReactElement => {
    return <th className={"sorting"}>{title}</th>
}
interface TableBodyProps {
    children: ReactElement[]
}
export const TableBody: FC<TableBodyProps> = ({ children }): ReactElement => {
    return <tbody>{children}</tbody>
}
export const ListBodyTr = ({ children}): ReactElement => {
    return <tr>{children}</tr>
}
interface BodyElemProps {
    children: ReactElement | ReactElement[] | any,
    className?: string
}
export const BodyElem: FC<BodyElemProps> = ({ children, className }): ReactElement => {
    return <td className={className}>{children}</td>
}

export default List;