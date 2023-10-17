import { FlexContainer } from "../UI"
import { UserCard } from ".."

export const Users = () => {
    return(
        <FlexContainer type="column" backgroundColor="black_default" bgOpacity=".9" height="100%" radiusFour="s" overflow="scroll-y" >
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </FlexContainer>
    )
}