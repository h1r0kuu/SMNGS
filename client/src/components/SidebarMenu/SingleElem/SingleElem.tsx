import React, {FC, ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {NavLink} from "react-router-dom";

interface SingleElemProps {
    title: string,
    href: string,
    icon?: IconDefinition
}

const SingleElem: FC<SingleElemProps> = ({title, href, icon}): ReactElement => {
    const path = window.location.pathname
    return (
        <li className={(href === path) ? "active" : ""}>
            <NavLink to={href}>{icon && <FontAwesomeIcon icon={icon} />}<span>{title}</span></NavLink>
        </li>
    )
}

export default SingleElem;