import { Button, FlexContainer } from "../UI";
import BalloonChatIcon from "../UI/Icons/BalloonChatIcon";
import { UserCard } from "..";

export const Navbar = () => {
  return (
    <FlexContainer type="row" align="center" height="6.5rem" backgroundColor="black_default" radiusOne="s" horizonalPadding="0.5rem" >
        <BalloonChatIcon />
        <UserCard owner />
        <Button text="Logout"  size="s" />
    </FlexContainer>
  )
}
