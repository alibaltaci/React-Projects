import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import NotFound from "./pages/NotFound"
import RegisterPage from "./pages/RegisterPage"
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute"

const routes = [
    {
        name: "home",
        path :"/",
        children:[ 
            {
                name: "index",
                index : true,
                element: <Home />,
                auth: true
            },
            {
                name: "register",
                path :"register",
                element: <RegisterPage />
            },
            {
                name: "login",
                path :"login",
                element: <LoginPage />
            }
        ]
    },
    {
        name: "notFound",
        path: "/*",
        element: <NotFound />
    }
]

const authMap = routes => routes.map( route => {
    if( route?.auth ){
         route.element = <PrivateRoute>{ route.element }</PrivateRoute>
         console.log( "-->", route.element )
    }
    if( route?.children ){
         route.children = authMap( route.children )
    }

    return route
})

export default authMap( routes );