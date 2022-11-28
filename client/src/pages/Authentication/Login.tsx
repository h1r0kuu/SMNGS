import React, {ReactElement} from "react";
import {Button, Col, FormGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FORGOT_PASSWORD, REGISTRATION} from "../../constants/pathConstants";
import AddOrEdit from "../../components/AddOrEdit/AddOrEdit";
import {useForm} from "react-hook-form";
import {AuthLogin} from "../../types/auth";
import FormGroupController from "../../components/Form/FormGroup/FormGroupController";

import {AuthService} from "../../services/authService"
import {useCurrentUser} from "../../context/UserContext";
import {axios} from "../../config/axios";

const Login = (): ReactElement => {
    const user = useCurrentUser();
    const {control, register, handleSubmit, formState: {errors}} = useForm<AuthLogin>()

    const onSubmit = async (formData: AuthLogin) => {
        try {
            const {data} = await AuthService.login(formData)
            localStorage.setItem('token', data.token)
            axios.defaults.headers.common['Authorization'] = data.token;
            await user.fetchUser()
            window.location.href = "/dashboard"
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            <img className="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
                        </div>
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <h1>Login</h1>
                                <p className="account-subtitle">Access to our dashboard</p>
                                <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                                    <Col sm={12}>
                                        <FormGroupController
                                            type={"text"}
                                            register={register}
                                            control={control}
                                            error={errors.username}
                                            name={"username"}
                                            placeholder={"username"}
                                            // title={"Group Name"}
                                        />
                                    </Col>
                                    <Col sm={12}>
                                        <FormGroupController
                                            type={"password"}
                                            register={register}
                                            control={control}
                                            error={errors.password}
                                            name={"password"}
                                            placeholder={"password"}
                                            // title={"Group Name"}
                                        />
                                    </Col>
                                    <Col sm={12}>
                                        <FormGroup className={"form-group"}>
                                            <Button type={"submit"} variant={"primary"} style={{width: "100%"}}>Login</Button>
                                        </FormGroup>
                                    </Col>
                                </AddOrEdit>
                                <div className="text-center forgotpass">
                                    <Link to={FORGOT_PASSWORD}>Forgot Password?</Link>
                                </div>
                                <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                </div>
                                <div className="social-login">
                                    <span>Login with</span>
                                    <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a><a
                                    href="#" className="google"><i className="fab fa-google"></i></a>
                                </div>
                                <div className="text-center dont-have">Don’t have an account?
                                    <Link to={REGISTRATION}> Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;