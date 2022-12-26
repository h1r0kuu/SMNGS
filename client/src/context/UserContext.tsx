import {createContext, FC, ReactElement, useContext} from "react";
import {useFetchCurrentUser} from "../hooks/users/useFetchCurrentUser";

import {AuthService} from "../services/authService"
import {axios} from "../config/axios";
import {DASHBOARD} from "../constants/pathConstants";

export const Context = createContext<any>(undefined)

export const useCurrentUser = () => {
    return useContext(Context)
}

interface UserContextProps {
    children: ReactElement | ReactElement[]
}

const UserContext: FC<UserContextProps> = ({ children }): ReactElement => {
    const user = useFetchCurrentUser()

    const onLogout = async () => {
        await AuthService.logout()
        localStorage.removeItem('token')
        user.setCurrentUser(undefined)
        delete axios.defaults.headers.common['Authorization']
        window.location.href = DASHBOARD
    }

    return (
        <Context.Provider value={{...user, onLogout}}>
            {children}
        </Context.Provider>
    )
}

export default UserContext;
