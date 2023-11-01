import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import NotFound from "./pages/NotFound"
import RegisterPage from "./pages/RegisterPage"

const routes = [
    {
        name: "home",
        path :"/",
        children:[ 
            {
                name: "index",
                index : true,
                element: <Home />
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

export default routes