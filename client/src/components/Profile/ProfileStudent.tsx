import {FC, ReactElement} from "react";
import {Nav, NavItem, NavLink, Row, TabContainer, TabContent} from "react-bootstrap";
import AboutTab from "./AboutTab/AboutTab";
import PasswordTab from "./PasswordTab/PasswordTab";
import RoutineTab from "./RoutineTab/RoutineTab";
import AttendanceTab from "./AttendanceTab/AttendanceTab";
import {UserResponse} from "../../types/user";
import MarkTab from "./MarkTab/MarkTab";
import InvoiceTab from "./InvoiceTab/InvoiceTab";

interface ProfileStudentProps {
    user: UserResponse
}

const ProfileStudent: FC<ProfileStudentProps> = ({ user }): ReactElement => {
    return (
        <>
            <div className="profile-header">
                <Row className="align-items-center">
                    <div className="col-auto profile-image">
                        <a href="#">
                            <img className="rounded-circle" alt="User Image"
                                 src={user.profilePicture}/>
                        </a>
                    </div>
                    <div className="col ml-md-n2 profile-user-info">
                        <h4 className="user-name mb-0">{user.firstName} {user.lastName}</h4>
                    </div>
                    <div className="col-auto profile-btn">
                        <a href="#" className="btn btn-primary">
                            Edit
                        </a>
                    </div>
                </Row>
            </div>
            <TabContainer defaultActiveKey={"about"}>
                <div className="profile-menu">
                    <Nav className={"nav-tabs nav-tabs-solid"}>
                        <NavItem as={"li"}>
                            <NavLink eventKey={"about"}>About</NavLink>
                        </NavItem>
                        <NavItem as={"li"}>
                            <NavLink eventKey={"password"}>Password</NavLink>
                        </NavItem>
                        <NavItem as={"li"}>
                            <NavLink eventKey={"password"}>Routine</NavLink>
                        </NavItem>
                        <NavItem as={"li"}>
                            <NavLink eventKey={"password"}>Attendance</NavLink>
                        </NavItem>
                        <NavItem as={"li"}>
                            <NavLink eventKey={"password"}>Mark</NavLink>
                        </NavItem>
                        <NavItem as={"li"}>
                            <NavLink eventKey={"password"}>Invoice</NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <TabContent className="profile-tab-cont">
                    <AboutTab eventKey={"about"} user={user} />
                    <PasswordTab eventKey={"password"} />
                    <RoutineTab />
                    <AttendanceTab />
                    <MarkTab />
                    <InvoiceTab />
                </TabContent>
            </TabContainer>
        </>
    )
}

export default ProfileStudent