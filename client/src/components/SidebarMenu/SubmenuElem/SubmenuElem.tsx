import React, {FC, ReactElement, useState} from "react";
import {Link, NavLink} from "react-router-dom";

interface SubmenuElemProps {
    title: string,
    href: string
}

const SubmenuElem: FC<SubmenuElemProps> = ({title, href}): ReactElement => {
    return (
        <li><NavLink to={href} className={({ isActive }) => isActive ? "active" : ""}>&nbsp;{title}</NavLink></li>
    )
}

export default SubmenuElem;