import React, {FC, ReactElement} from "react";
import {NavLink} from "react-router-dom";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface SubmenuElemProps {
    title: string,
    href: string,
    icon?: IconDefinition

}

const SubmenuElem: FC<SubmenuElemProps> = ({title, href, icon}): ReactElement => {
    return (
        <li>
            <NavLink to={href} className={({ isActive }) => isActive ? "active" : ""}>
                {icon && <FontAwesomeIcon icon={icon} />}&nbsp;{title}
            </NavLink>
        </li>
    )
}

export default SubmenuElem;