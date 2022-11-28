import {ReactElement} from "react";
import {Button, Form, FormControl, FormGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LOGIN} from "../../constants/pathConstants";

const Register = (): ReactElement => {
    return (
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            <img className="img-fluid" src="assets/img/logo-white.png" alt="Logo"/>
                        </div>
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <h1>Register</h1>
                                <p className="account-subtitle">Access to our dashboard</p>
                                <Form>
                                    <FormGroup className={"form-group"}>
                                        <FormControl type={"text"} placeholder={"Name"}></FormControl>
                                    </FormGroup>
                                    <FormGroup className={"form-group"}>
                                        <FormControl type={"text"} placeholder={"Email"}></FormControl>
                                    </FormGroup>
                                    <FormGroup className={"form-group"}>
                                        <FormControl type={"password"} placeholder={"Password"}></FormControl>
                                    </FormGroup>
                                    <FormGroup className={"form-group"}>
                                        <FormControl type={"text"} placeholder={"Confirm Password"}></FormControl>
                                    </FormGroup>
                                    <FormGroup className={"form-group mb-0"}>
                                        <Button type={"submit"} variant={"primary"} style={{width: "100%"}}>Register</Button>
                                    </FormGroup>
                                </Form>
                                <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                </div>
                                <div className="social-login">
                                    <span>Register with</span>
                                    <a href="#" className="facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="google">
                                        <i className="fab fa-google"></i>
                                    </a>
                                </div>
                                <div className="text-center dont-have">Already have an account?
                                    <Link to={LOGIN}> Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;