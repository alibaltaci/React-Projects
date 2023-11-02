import { Button, FlexContainer } from "../UI";
import BalloonChatIcon from "../UI/Icons/BalloonChatIcon";
import { UserCard } from "..";
import {RxCross2} from "react-icons/rx"
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useHoverColor } from "../../hooks";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const Navbar = () => {

  const {isResponsive, handleVisible} = useGlobalContext()

  const { clr, handleColorOver, handleColorOut } = useHoverColor("white", "plum")

  const out = () => {
    signOut( auth )
    .then(() => console.log("success"))
    .catch( err => console.log(err))
  }

  return (
    <FlexContainer type="row" align="center" height="6.5rem" backgroundColor="black_default" radiusOne="s" horizonalPadding="0.5rem" >        
        <BalloonChatIcon />
        <UserCard owner />
        <FlexContainer type="row" align="center" gap="1rem" >
          <Button onClick={ out } text="Logout" size="s" />
          { isResponsive && <RxCross2 color={clr} size="2rem" onClick={handleVisible} cursor="pointer" onMouseOver={handleColorOver} onMouseOut={handleColorOut} />}
        </FlexContainer>
    </FlexContainer>
  )
}
