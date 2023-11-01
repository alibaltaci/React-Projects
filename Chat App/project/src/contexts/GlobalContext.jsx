import { createContext, useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { theme } from "../styles/theme";

const AppContext = createContext()

const AppProvider = ( {children} ) => {


    const [selectedFile, setSelectedFile] = useState(undefined);
    const [fileName, setFileName] = useState(undefined);
    const [isVisible, setIsVisible] = useState(true)

    const handleVisible = () => {
        setIsVisible(!isVisible)
    }

    const isResponsive = useMediaQuery({query: `(max-width: ${theme.screen.tablet})`})


    const contextValue = {
        selectedFile,
        setSelectedFile,
        fileName,
        setFileName,
        isVisible, 
        setIsVisible, 
        isResponsive, 
        handleVisible  
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