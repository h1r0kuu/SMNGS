import {ReactElement} from "react";
import AdminView from "./AdminView/AdminView";

const Views = (): ReactElement => {
    const userRole = "ADMIN"

    if(userRole === "ADMIN") {
        return <AdminView />
    } else {
        return <></>
    }
}

export default Views