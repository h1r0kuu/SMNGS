import React, {FC, ReactElement, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {CSSTransition} from "react-transition-group";

interface SubmenuProps {
    title: string,
    icon?: IconDefinition,
    children: ReactElement | ReactElement[],
    selectedDropdown: number,
    setSelectedDropdown: (boolean) => void,
    id: number
}

const Submenu: FC<SubmenuProps> = ({title, icon, children, selectedDropdown, setSelectedDropdown, id}): ReactElement => {
    const path = window.location.pathname

    const openDropdown = () => {
        if(selectedDropdown === id) {
            setSelectedDropdown(0)
        } else {
            setSelectedDropdown(id)
        }
    };

    const active = (): boolean => {
        return selectedDropdown === id
    }

    useEffect(() => {
        React.Children.forEach(children, element => {
            if(path === element.props.href) {
                setSelectedDropdown(id)
            }
        })
    }, [path])

    return (
        <li className={`submenu ${active() ? "active" : ""}`} onClick={openDropdown} id={id.toString()}>
            <a className={`${active() && "subdrop"}`}>{icon && <FontAwesomeIcon icon={icon} />}
                <span> {title}</span>
                <span className="menu-arrow"><FontAwesomeIcon icon={faAngleRight} /></span>
            </a>
            <CSSTransition in={active()} classNames={{
                enter: "submenu-list-enter",
                enterActive: "submenu-list-enter-active",
                exit: "submenu-list-exit",
                exitActive: "submenu-list-exit-active",
                exitDone: "submenu-list-exit-done"
            }} className={`${active() ? "active" : ""}`} timeout={1000}>
                <ul>
                    {children}
                </ul>
            </CSSTransition>
        </li>
    )
}

export default Submenu;