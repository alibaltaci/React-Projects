import { createContext, useContext, useReducer } from "react";
import data from "../data/data.json"
import reducer from "../reducer";

const AppContext = createContext()



const initialState = {
    common: {
        hero:{
            // topContent: "",
            // heading: "",
            // content: "",
            // button: "",
            // imgUrl: ""
        },
    },
    servicesPage:{
        services:[]
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

    const getServicesPageData = () => {
        return dispatch({
            type: "SERVICES_DATA",
            payload: data.servicesPage
        })
    }

    const dispatchReturner = ( page ) => {

        const pageMap = {
            "home" : getHomePageData(),
            "about" : getAboutPageData(),
            "services" : getServicesPageData(),
        }

        return pageMap[page]
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

