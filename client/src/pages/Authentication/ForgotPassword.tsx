import {ReactElement} from "react";
import {Button, Form, FormControl, FormGroup} from "react-bootstrap";

const ForgotPassword = (): ReactElement => {
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
                                <h1>Forgot Password?</h1>
                                <p className="account-subtitle">Enter your email to get a password reset link</p>
                                <Form>
                                    <FormGroup className={"form-group"}>
                                        <FormControl type={"text"} placeholder={"Email"}></FormControl>
                                    </FormGroup>
                                    <FormGroup className={"form-group"}>
                                        <Button type={"submit"} variant={"primary"} style={{width: "100%"}}>Reset Password</Button>
                                    </FormGroup>
                                </Form>
                                <div className="text-center dont-have">Remember your password? <a
                                    href="login.html">Login</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;