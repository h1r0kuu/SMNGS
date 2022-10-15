import React, {FC, ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {Card, Col} from "react-bootstrap";

interface DataCardProps {
    title: string,
    value: string,
    icon?: IconDefinition,
    bg: string
}

const DataCard: FC<DataCardProps> = ({title, value, icon, bg}): ReactElement => {
    return (
        <Col xl={3} sm={6}>
            <Card className={`bg-${bg} w-100`}>
                <Card.Body>
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                        <div className="db-icon">
                            {icon &&
                                <FontAwesomeIcon icon={icon}/>
                            }
                        </div>
                        <div className="db-info">
                            <h3>{value}</h3>
                            <h6>{title}</h6>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DataCard;