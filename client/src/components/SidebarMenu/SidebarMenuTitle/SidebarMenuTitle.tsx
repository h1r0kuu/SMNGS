import React, {FC, ReactElement} from "react";

interface SidebarMenuTitleProps {
    title: string
}

const SidebarMenuTitle: FC<SidebarMenuTitleProps> = ({title}): ReactElement => {
    return (
        <li className="menu-title">
            <span>{title}</span>
        </li>
    )
}

export default SidebarMenuTitle;