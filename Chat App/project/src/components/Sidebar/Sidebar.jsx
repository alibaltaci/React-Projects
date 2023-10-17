import { Navbar, UserSearch } from ".."
import { FlexContainer } from "../UI"

export const Sidebar = () => {
  return(
    <FlexContainer type="column" width="30%"  radiusLeft="s" >
      <Navbar />
      <UserSearch />
    </FlexContainer>
  )
}
