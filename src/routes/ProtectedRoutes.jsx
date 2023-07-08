import {Navigate, Outlet} from "react-router-dom"

export const ProtectedRoutes = ({children, isValidPermissions}) => {
    if(!isValidPermissions){
        return <Navigate to="/" />
    }

    return children ? children : <Outlet />
}