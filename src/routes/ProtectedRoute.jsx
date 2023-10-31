import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/Index";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {

    const {isLogged} = useContext(AuthContext);

    return isLogged ? children : <Navigate to={'/'}/>
}

export default ProtectedRoute;