import { NavLink } from 'react-router-dom'
import { navbar } from '../../data/data.json'
import StyledNav from './StyledNav'

function Navbar() {

    return (
    <StyledNav>
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
    </StyledNav>
  )
}

export default Navbar