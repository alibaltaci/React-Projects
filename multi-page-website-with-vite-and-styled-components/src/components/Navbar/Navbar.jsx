import { NavLink } from 'react-router-dom'
import { navbar } from '../../data/data.json'
import StyledNav from './StyledNav'
import MenuIcon from './MenuIcon'
import { useState } from 'react'

function Navbar() {

    const [ openMenu, setOpenMenu ] = useState(false)

    return (
    <StyledNav>
        <div className={ openMenu? 'active' : 'menuIcon'}>

       
        <ul  className="navbar-list" >
            {
                navbar.map( (data) => (
                    data.page !== "page404" &&(
                            <li key={data.path} >
                                <NavLink className="navbar-link" to={data.path}>
                                        {data.content}
                                </NavLink>
                            </li>
                    )
                ) )
            }
        </ul>

            <MenuIcon onClick={setOpenMenu} />
        </div>

    </StyledNav>
  )
}

export default Navbar