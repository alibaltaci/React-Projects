import { FlexContainer, Image, ProfileImage, Typography } from "../UI"

export const Message = ({data}) => {
    const { from, message, type } = data

    if(from === "owner"){
        return(
            <FlexContainer type="row" align="center" marginLeft="1rem" direction="row-reverse">
                <FlexContainer type="column" padding=".4rem">
                    <ProfileImage src="./images/balloon-profile.svg" alt="profile" loading="lazy" width="3rem" height="3rem" bgColor="white" marginRight="1rem" />
                    <Typography text="just now" elementType="span" color="white_default" />
                </FlexContainer>
                {
                    type === "image"
                    ? <Image src={message} width="50%" radius="xs" margin=".8rem" />
                    :<FlexContainer justify="flex-end" width="60%">
                        <FlexContainer type="column" backgroundColor="black_default" margin=".8rem" padding=".6rem" radius="m" radiusZeroThree maxWidth="max-content" >
                            <Typography text={message} color="white_default" align="right" />
                        </FlexContainer>  
                    </FlexContainer>
                }

            </FlexContainer>
        )
    }
    else if( from === "user"){
        return(
            <FlexContainer type="row" align="center" marginLeft="1rem" direction="">
                <FlexContainer type="column" padding=".4rem" center>
                    <ProfileImage src="./images/balloon-profile.svg" alt="profile" loading="lazy" width="3rem" height="3rem" bgColor="white" marginRight="1rem" />
                    <Typography text="just now" elementType="span" color="white_default" />
                </FlexContainer>
                {
                    type === "image" 
                    ? <Image src={message} width="50%" radius="xs" margin=".8rem" />
                    : <FlexContainer justify="flex-start" width="60%">
                        <FlexContainer type="column" backgroundColor="black_default" margin=".8rem" padding=".6rem" radius="m" radiusZeroFour maxWidth="max-content" >
                            <Typography text={message} color="white_default" align="left" />
                        </FlexContainer>
                    </FlexContainer>
                }
                
            </FlexContainer>
        )
    }
}