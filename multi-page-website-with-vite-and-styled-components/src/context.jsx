import { createContext, useContext, useReducer } from "react";
import data from "../src/data/data.json"
import reducer from "./reducer";

const AppContext = createContext()

const initialState = {
    pageData: {
        hero:{
            // topContent: "",
            // heading: "",
            // content: "",
            // button: "",
            // imgUrl: ""
        }
    }
}

const AppProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( reducer, initialState );

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: data.home
        })
    }

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: data.about
        })
    }  

    return (
        <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}} >
            { children }
        </AppContext.Provider>
    )
}

// global custom hook 

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext };

