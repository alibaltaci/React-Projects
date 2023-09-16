import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import StyledHeader from './StyledHeader'

function Header() {
  return (
    <StyledHeader>
        <NavLink to="/" >
            {/* <img src='./logo/logo.png' alt='logo'  className='logo' /> */}
            <h1 className='logo' >Logo</h1>
        </NavLink>
        <Navbar />
    </StyledHeader>
  )
}

export default Header