import React, {FC, ReactElement} from "react";
import {Breadcrumb, BreadcrumbItem, Row} from "react-bootstrap";
import {BreadcrumbItemProps} from "react-bootstrap/BreadcrumbItem";

interface PageHeaderProps {
    title: string,
    children: ReactElement | ReactElement[]
}

const PageHeader: FC<PageHeaderProps> = ({title, children}): ReactElement => {
    return (
        <div className="page-header">
            <Row>
                <div className="col-sm-12">
                    <h3 className="page-title">{title}</h3>
                    <Breadcrumb>
                        {children}
                    </Breadcrumb>
                </div>
            </Row>
        </div>
    )
}

export default PageHeader;