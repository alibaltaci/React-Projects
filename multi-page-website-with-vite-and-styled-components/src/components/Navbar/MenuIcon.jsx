import Close from "../Common/Icons/Close";
import Menu from "../Common/Icons/Menu";
import { StyledMenuIcon } from "./StyledMenuIcon";

export default function MenuIcon() {

  return (

    <StyledMenuIcon className="mobile-navbar-btn" >
        <Menu name="menu-outline" className="mobile-nav-icon" />
        <Close name="close-outline" className="close-outline mobile-nav-icon" />
    </StyledMenuIcon>

  )
}
