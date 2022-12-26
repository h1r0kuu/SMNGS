import {Route, Routes} from "react-router-dom";
import {DASHBOARD, HOME, LOGIN, REGISTRATION} from "../../constants/pathConstants";
import React from "react";
import Login from "../../pages/Authentication/Login";
import Register from "../../pages/Authentication/Register";
import NotFound from "../../components/NotFound/NotFound";

const UnauthorizedView = () => {
    return (
        <Routes>
            <Route path={REGISTRATION} element={<Register />} />

            <Route path={"*"} element={<Login />} />
        </Routes>
    )
}

export default UnauthorizedView