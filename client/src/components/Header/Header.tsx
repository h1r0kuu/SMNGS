import React, {FC, ReactElement, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAlignLeft, faBars, faBell, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {MY_PROFILE} from "../../constants/pathConstants";
import { Scrollbars } from 'react-custom-scrollbars';

interface HeaderProps {
    openMobileNav: () => void,
}

const Header: FC<HeaderProps> = ({openMobileNav}) : ReactElement => {
    const [dropdownShow, setDropdownShow] = useState(false)
    const [notificationsShow, setNotificationsShow] = useState(false)

    const toggleDropdown = () => {
        setDropdownShow(!dropdownShow)
        setNotificationsShow(false)
    }

    const toggleNotification = () => {
        setNotificationsShow(!notificationsShow)
        setDropdownShow(false)
    }

    return (
        <div className="header">
            <div className="header-left">
                <a href="index.html" className="logo">
                    {/*<img src={logo} alt="Logo" />*/}
                </a>
                <a href="index.html" className="logo logo-small">
                    {/*<img src={logoSmall} alt="Logo" width="30" height="30" />*/}
                </a>
            </div>
            <a href="#" id="toggle_btn">
                <FontAwesomeIcon icon={faAlignLeft} />
            </a>
            <div className="top-nav-search">
                <form>
                    <input type="text" className="form-control" placeholder="Search here" />
                    <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
            <a className="mobile_btn" onClick={() => openMobileNav()}>
                <FontAwesomeIcon icon={faBars} />
            </a>
            <ul className="nav user-menu">
                <li className="nav-item dropdown noti-dropdown">
                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"  onClick={() => toggleNotification()}>
                        <FontAwesomeIcon icon={faBell} style={{fontSize: "25px", lineHeight: "60px", marginTop: "15px"}}/> <span className="badge badge-pill">3</span>
                    </a>
                    <div className={`dropdown-menu notifications ${notificationsShow ? 'show' : ""}`}>
                        <div className="topnav-dropdown-header">
                            <span className="notification-title">Notifications</span>
                            <a href="#" className="clear-noti"> Clear All </a>
                        </div>
                        <div className="noti-content">
                            <Scrollbars autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={500}
                                        autoHeightMin={"100vh"}
                                        renderTrackVertical={props => <div {...props} className="track-vertical"/>} >
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media">
                                        <span className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" alt="User Image"
                                             src="assets/img/profiles/avatar-02.jpg" />
                                        </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Carlson Tech</span> has
                                                        approved <span className="noti-title">your estimate</span></p>
                                                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media">
                                        <span className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" alt="User Image"
                                             src="assets/img/profiles/avatar-11.jpg" />
                                        </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span
                                                        className="noti-title">International Software Inc</span> has sent you a invoice in the
                                                        amount of <span className="noti-title">$218</span></p>
                                                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media">
                                        <span className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" alt="User Image"
                                             src="assets/img/profiles/avatar-17.jpg" />
                                        </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">John Hendry</span> sent a
                                                        cancellation request <span className="noti-title">Apple iPhone XR</span></p>
                                                    <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media">
                                        <span className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" alt="User Image"
                                             src="assets/img/profiles/avatar-13.jpg" />
                                        </span>
                                                <div className="media-body">
                                                    <p className="noti-details"><span className="noti-title">Mercury Software Inc</span> added a
                                                        new product <span className="noti-title">Apple MacBook Pro</span></p>
                                                    <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </Scrollbars>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <a href="#">View all Notifications</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown has-arrow" onClick={() => toggleDropdown()}>
                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <span className="user-img"><img className="rounded-circle" src="assets/img/profiles/avatar-01.jpg"
                                                width="31" alt="Ryan Taylor" /></span>
                    </a>
                    <div className={`dropdown-menu ${dropdownShow ? "show" : ""}`}>
                        <div className="user-header">
                            <div className="avatar avatar-sm">
                                <img src="assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="user-text">
                                <h6>Ryan Taylor</h6>
                                <p className="text-muted mb-0">Administrator</p>
                            </div>
                        </div>
                        <Link to={MY_PROFILE} className={"dropdown-item"}>My Profile</Link>
                        <a className="dropdown-item" href="inbox.html">Inbox</a>
                        <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header;