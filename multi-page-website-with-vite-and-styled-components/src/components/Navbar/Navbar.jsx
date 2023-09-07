import { NavLink } from 'react-router-dom'
import { navbar } from '../../data/data.json'
import StyledNav from './StyledNav'
import { useState } from 'react'
import { CgClose, CgMenu } from 'react-icons/cg';

function Navbar() {

    const [ openMenu, setOpenMenu ] = useState(false)

    return (
    <StyledNav>
        <div className={ openMenu? 'active' : 'menuIcon'}>
       
        <ul  className="navbar-list" >
            {
                navbar.map( (data) => (
                    data.page !== "page404" &&(
                            <li 
                                key={data.path} 
                                onClick={() => setOpenMenu(false)}
                            >
                                <NavLink className="navbar-link" to={data.path}>
                                        {data.content}
                                </NavLink>
                            </li>
                    )
                ) )
            }
        </ul>

        <div className='mobile-navbar-btn'>

        <CgMenu 
            name="menu-outline" 
            className="mobile-nav-icon" 
            onClick={() => setOpenMenu(true)} 
            />

        <CgClose 
            name="close-outline" 
            className="close-outline mobile-nav-icon" 
            onClick={() => setOpenMenu(false)}
            />
        </div>

        </div>

    </StyledNav>
  )
}

export default Navbar