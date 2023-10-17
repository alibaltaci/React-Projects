import { Button, FlexContainer, Typography } from "../UI";
import BalloonChatIcon from "../UI/Icons/BalloonChatIcon";
import ProfileImage from "../UI/ProfileImage/ProfileImage";

export const Navbar = () => {
  return (
    <FlexContainer type="row" align="center" backgroundColor="black_default" radiusLeft="s" horizonalPadding="0.5rem" >
        <BalloonChatIcon />
        <FlexContainer type="row" align="center" width="100%" margin="1rem">
            <ProfileImage src="./images/balloon-profile.svg" alt="profile" width="3rem" height="3rem" bgColor="white" marginRight="1rem" />
            <Typography text="John Smith" elementType="span" color="white_default" variant="paragraph_xs" />
        </FlexContainer>
        <Button text="Logout"  size="s" />
    </FlexContainer>
  )
}
