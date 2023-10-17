import { Navbar, UserSearch } from ".."
import { FlexContainer } from "../UI"
import { Users } from "../Users/Users"

export const Sidebar = () => {
  return(
    <FlexContainer type="column" width="30%"  radiusLeft="s" >
      <Navbar />
      <UserSearch />
      <Users />
    </FlexContainer>
  )
}
