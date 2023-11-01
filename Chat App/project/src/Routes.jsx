import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

const routes = [
    {
        name: "home",
        path :"/",
        children:[ 
            {
                name: "index",
                path : true,
                element: Home
            },
            {
                name: "register",
                path :"register",
                element: Register
            },
            {
                name: "login",
                path :"login",
                element: Login
            }
        ]
    },
    {
        name: "notFound",
        path: "/*",
        element: NotFound
    }
]

export default routes