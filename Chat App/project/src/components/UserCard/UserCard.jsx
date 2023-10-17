import { FlexContainer, ProfileImage, Typography } from "../UI"

export const UserCard = (props) => {

    if(props.owner){
        return(
            <FlexContainer type="row" align="center" width="100%" margin="1rem" >
                <ProfileImage src="./images/balloon-profile.svg" alt="profile" width="3rem" height="3rem" bgColor="white" marginRight="1rem" />
                <Typography text="John Smith" elementType="span" color="white_default" variant="paragraph_xs" />
            </FlexContainer>
        )
    }
    return(
        <FlexContainer type="row" border=".3px solid transparent" borderHover=".3px solid white_default" margin=".4rem .8rem" align="center" padding=".5rem .8rem" backgroundColor="black_default" bgOpacity="inherit" bgOpacityHover="1" radius="s" >
            <ProfileImage src="./images/balloon-profile.svg" alt="profile" width="3rem" height="3rem" bgColor="white" marginRight="1rem" />
            <Typography text="John Smith" elementType="span" color="white_default" variant="paragraph_xs" />
        </FlexContainer>
    )
    
}