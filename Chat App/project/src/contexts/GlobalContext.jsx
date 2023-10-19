import { createContext, useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { theme } from "../styles/theme";

const AppContext = createContext()

const AppProvider = ( {children} ) => {

    const [isVisible, setIsVisible] = useState(true)

    const handleVisible = () => {
        setIsVisible(!isVisible)
    }

    const isResponsive = useMediaQuery({query: `(max-width: ${theme.screen.tablet})`})


    return(
        <AppContext.Provider value={{isVisible, setIsVisible, isResponsive, handleVisible}} >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }