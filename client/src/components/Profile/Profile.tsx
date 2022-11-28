import {FC, ReactElement} from "react";
import {Col, Row} from "react-bootstrap";
import {UserResponse} from "../../types/user";
import {UserRole} from "../../enums/userRole";
import ProfileTeacher from "./ProfileTeacher";
import ProfileStudent from "./ProfileStudent";

interface ProfileProps {
    user: UserResponse
}

const Profile: FC<ProfileProps> = ({user}): ReactElement => {

    const profile = () => {
        if(user.role === UserRole.TEACHER) {
            return <ProfileTeacher user={user} />
        } else if(user.role === UserRole.STUDENT) {
            return <ProfileStudent user={user} />
        }
    }

    return (
        <Row>
            <Col md={12}>
                {profile()}
            </Col>
        </Row>
    )
}

export default Profile