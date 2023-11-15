import { createBrowserRouter } from "react-router-dom"
import MainLayout from "~/layout/main"
import Explore from "~/pages/Explore"
import Home from "~/pages/Home"
import NotFound from "~/pages/NotFound"
import Notifications from "~/pages/Notifications"


const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout />,
        children:[

            {
                index: true,
                element:<Home />
            },
            {
                path: "/explore",
                element:<Explore />
            },
            {
                path: "/notifications",
                element:<Notifications />
            },
            {
                path: "*",
                element:<NotFound />
            },
        ]
    },

])

export default routes