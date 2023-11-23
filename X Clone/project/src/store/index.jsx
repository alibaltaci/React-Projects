import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import { Provider } from "react-redux";

 const store = configureStore({
    reducer:{
        auth
    }
 })

 const ReduxProvider = ( {children} ) => {
    return(
        <Provider store={ store } >
            { children }
        </Provider>
    )
 }

 export default ReduxProvider

