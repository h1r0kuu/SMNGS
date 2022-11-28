import React, {FC, ReactElement, useState} from "react";

import { Scrollbars } from 'react-custom-scrollbars';

interface SidebarMenuPros {
    children: ReactElement[]
}

const SidebarMenu: FC<SidebarMenuPros> = ({children}): ReactElement => {

    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <Scrollbars autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={500}
                            renderTrackVertical={props => <div {...props} className="track-vertical"/>} >
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            {children}
                        </ul>
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}

export default SidebarMenu;