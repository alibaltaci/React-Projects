import Home from '../../pages/Home'
import About from '../../pages/About'
import Services from '../../pages/services/Services'
import Contact from '../../pages/Contact/Contact'
import Page404 from '../../pages/Page404.jsx'

function PageReturner({page}) {

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

export default PageReturner