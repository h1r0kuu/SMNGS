import React, {FC, ReactElement} from "react";
import {Breadcrumb, Col, Row} from "react-bootstrap";

interface PageHeaderProps {
    title: string,
    children: ReactElement | ReactElement[]
}

const PageHeader: FC<PageHeaderProps> = ({title, children}): ReactElement => {
    return (
        <div className="page-header">
            <Row>
                <Col ms={12}>
                    <h3 className="page-title">{title}</h3>
                    <Breadcrumb>
                        {children}
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
    )
}

export default PageHeader;