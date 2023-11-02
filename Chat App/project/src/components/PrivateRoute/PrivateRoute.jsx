import { Navigate } from "react-router-dom"
import { useGlobalContext } from "../../contexts/GlobalContext"

export const PrivateRoute = ( {children} ) => {

    const { currentUser } = useGlobalContext()

    if( !currentUser ){
        return <Navigate to="/login" />
    }

    return children
}