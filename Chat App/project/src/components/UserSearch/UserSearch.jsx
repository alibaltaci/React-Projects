import { FlexContainer, Input } from "../UI"

export const UserSearch = () => {
    return(
        <FlexContainer type="column">

        <Input 
            placeholder="Find a user" 
            color="white" 
            height="2.5rem" 
            paddingHorizonal="1rem" 
            radius="none" 
            textSize="min" 
            bgColor="black_default" 
            bgOpacity=".8"
            />
        <div style={{
            borderBottom:"2px solid white"
        }} />
        </FlexContainer>
    )
}