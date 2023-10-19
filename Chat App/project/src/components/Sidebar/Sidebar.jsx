import { Navbar, UserSearch } from ".."
import { Users } from "../Users/Users"
import { StyledSidebar } from "./StyledSidebar"

export const Sidebar = () => {
  
  return(
    <StyledSidebar width="30%"  radiusLeft="s" >
      <Navbar />
      <UserSearch />
      <Users />
    </StyledSidebar>


  )
}
