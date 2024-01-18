import { createBrowserRouter } from "react-router-dom"
import MainLayout from "~/layout/main"
import Bookmarks from "~/pages/Bookmarks"
import Explore from "~/pages/Explore"
import Home from "~/pages/Home"
import Lists from "~/pages/Lists"
import Messages from "~/pages/Messages"
import NotFound from "~/pages/NotFound"
import notifications from "~/pages/notifications"
import VisitedProfile from "~/pages/VisitedProfile"


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
                path: "explore",
                element:<Explore />
            },
            {
                path: "notifications",
                element:<notifications />
            },
            {
                path: "bookmarks",
                element:<Bookmarks />
            },
            {
                path: "lists",
                element:<Lists />
            },
            {
                path: "messages",
                element:<Messages />
            },
            {
                path: ":slug",
                element:<VisitedProfile />
            },
            {
                path: "*",
                element:<NotFound />
            },
        ]
    },

])

export default routes