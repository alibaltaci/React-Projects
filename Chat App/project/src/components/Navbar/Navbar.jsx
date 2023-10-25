import { Button, FlexContainer } from "../UI";
import BalloonChatIcon from "../UI/Icons/BalloonChatIcon";
import { UserCard } from "..";
import {RxCross2} from "react-icons/rx"
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useHoverColor } from "../../hooks";

export const Navbar = () => {

  const {isResponsive, handleVisible} = useGlobalContext()

  const { clr, handleColorOver, handleColorOut } = useHoverColor("white", "plum")

  return (
    <FlexContainer type="row" align="center" height="6.5rem" backgroundColor="black_default" radiusOne="s" horizonalPadding="0.5rem" >        
        <BalloonChatIcon />
        <UserCard owner />
        <FlexContainer type="row" align="center" gap="1rem" >
          <Button text="Logout" size="s" />
          { isResponsive && <RxCross2 color={clr} size="2rem" onClick={handleVisible} cursor="pointer" onMouseOver={handleColorOver} onMouseOut={handleColorOut} />}
        </FlexContainer>
    </FlexContainer>
  )
}
