import Home from '../../pages/Home'
import About from '../../pages/About'
import Services from '../../pages/Services/Services'
import Contact from '../../pages/Contact/Contact'
import Page404 from '../../pages/Page404/Page404.jsx'

function RouteReturner({page}) {

    const Page = page === "home" 
        ? Home 
        : page === "about"
        ? About
        : page === "services"
        ? Services
        : page === "contact"
        ? Contact
        : Page404
        
  return (
    <Page />
  )
}

export default RouteReturner