import { createContext, useContext } from "react";
import data from "../src/data/data.json"

const AppContext = createContext()

const AppProvider = ({ children }) => {

    return (
        <AppContext.Provider value={data} >
            { children }
        </AppContext.Provider>
    )
}

// global custom hook 

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext };