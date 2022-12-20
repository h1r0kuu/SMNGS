import {Button} from "react-bootstrap";
import {HOME} from "../../constants/pathConstants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";

const NotFound = () => {
    return (
        <div className="error-page">
            <div className="main-wrapper">
                <div className="error-box">
                    <h1>404</h1>
                    <h3 className="h2 mb-3">
                        <FontAwesomeIcon icon={faExclamationTriangle} /> Oops! Page not found!
                    </h3>
                    <p className="h4 font-weight-normal">The page you requested was not found.</p>
                    <Button as={"a"} href={HOME}>Back to Home</Button>
                </div>
            </div>
        </div>
    )
}

export default NotFound