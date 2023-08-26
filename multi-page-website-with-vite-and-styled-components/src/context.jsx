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

    const getHomePageData = () => {
        return dispatch({
            type: "HOME_DATA",
            payload: data.home
        })
    }

    const getAboutPageData = () => {
        return dispatch({
            type: "ABOUT_DATA",
            payload: data.about
        })
    }  

    const dispatchReturner = ( page ) => {

        page === "home" 
        ? getHomePageData()
        : page === "about"
        ? getAboutPageData()
        : state
    }

    return (
        <AppContext.Provider value={{...state, dispatchReturner}} >
            { children }
        </AppContext.Provider>
    )
}

// global custom hook 

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext };

