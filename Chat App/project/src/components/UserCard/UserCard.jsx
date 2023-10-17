import { FlexContainer, ProfileImage, Typography } from "../UI"

export const UserCard = ({ user, ...props}) => {

    if(props.owner){
        return(
            <FlexContainer type="row" align="center" width="100%" margin="1rem" >
                <ProfileImage src="./images/balloon-profile.svg" alt="profile" loading="lazy" width="3rem" height="3rem" bgColor="white" marginRight="1rem" />
                <Typography text="John Smith" elementType="span" color="white_default" variant="paragraph_xs" />
            </FlexContainer>
        )
    }
    if(user){
        const { profilePhoto, name, messages } = user
        return(
            <FlexContainer type="row" border=".3px solid transparent" borderHover=".3px solid white_default" margin=".4rem .8rem" align="center" padding=".5rem .8rem" backgroundColor="black_default" bgOpacity="inherit" bgOpacityHover="1" radius="s" >
                <ProfileImage src={profilePhoto  } alt={name} loading="lazy" width="3rem" height="3rem" marginRight="1rem" />
                <FlexContainer type="column" align="left">
                    <Typography text={name} elementType="span" color="white_default" variant="paragraph_s" />
                    <Typography text={messages[0]} elementType="span" color="white_default" variant="paragraph_min" opacity=".7" />
                </FlexContainer>
            </FlexContainer>
        )
    }
    
}