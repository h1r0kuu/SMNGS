import {Route, Routes} from "react-router-dom";
import {HOME, LOGIN, REGISTRATION} from "../../constants/pathConstants";
import React from "react";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";

const UnauthorizedView = () => {
    return (
        <Routes>
            <Route path={HOME} element={<Login />} />
            <Route path={"/"} element={<Login />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTRATION} element={<Register />} />
        </Routes>
    )
}

export default UnauthorizedView