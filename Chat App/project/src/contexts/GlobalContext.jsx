import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { theme } from "../styles/theme";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AppContext = createContext()

const AppProvider = ( {children} ) => {


    const [selectedFile, setSelectedFile] = useState(undefined);
    const [fileName, setFileName] = useState(undefined);
    const [isVisible, setIsVisible] = useState(true)

    const handleVisible = () => {
        setIsVisible(!isVisible)
    }

    const isResponsive = useMediaQuery({query: `(max-width: ${theme.screen.tablet})`})

    //auth
    const [currentUser, setCurrentUser] = useState({})
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return () => unsub();
    }, [])


    const contextValue = {
        selectedFile,
        setSelectedFile,
        fileName,
        setFileName,
        isVisible, 
        setIsVisible, 
        isResponsive, 
        handleVisible,
        currentUser
    };

    return(
        <AppContext.Provider value={contextValue} >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }