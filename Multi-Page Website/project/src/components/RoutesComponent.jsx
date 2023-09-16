import { useRoutes } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact/Contact"
import Home from "../pages/Home"
import Page404 from "../pages/Page404/Page404"
import Services from "../pages/Services/Services"
import Layout from "./Layout/Layout"

export default function RoutesComponent() {
    
    return useRoutes(routes)
    
}

const routes = [

    {
        page:"home",
        path:"/",
        element: <Layout />,
        children:[
            {
                page:"index",
                index:true,
                element: <Home />
            },
            {
                page:"about",
                path:"about",
                element: <About />
            },
            {
                page:"services",
                path:"services",
                element: <Services />,
            },    
            {
                page:"contact",
                path:"contact",
                element: <Contact />
            },
        ]
    },

    {
        page:"page404",
        path:"/*",
        element: <Page404 />
    },
    
]

