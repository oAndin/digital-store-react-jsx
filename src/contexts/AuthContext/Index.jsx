import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        {children}
    </AuthContext.Provider>
    );
};