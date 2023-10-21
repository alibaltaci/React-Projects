import { FlexContainer } from "../UI"
import { UserCard } from ".."
import { users } from "../../data/data"

export const Users = () => {
    return(
        <FlexContainer type="column" backgroundColor="black_default" bgOpacity=".9" height="100%" radiusFour="s" overflow="scroll-y" >
            
            {
                users.map( user => <UserCard key={user.id}  user={user} />)
            }
      
        </FlexContainer>
    )
}