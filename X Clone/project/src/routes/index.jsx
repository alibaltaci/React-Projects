import { createBrowserRouter } from "react-router-dom"
import Explore from "~/pages/explore"
import Home from "~/pages/home"
import Notifications from "~/pages/notifications"


const routes = createBrowserRouter([
    {
        path: "/",
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
])

export default routes