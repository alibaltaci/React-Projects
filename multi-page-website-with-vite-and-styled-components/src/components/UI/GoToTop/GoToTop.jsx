import { StyledGoToTop } from "./StyledGoToTop";
import ArrowUp from "../../Common/Icons/ArrowUp";

export default function GoToTop() {

  const goToBtn = () => {
    window.scrollTo( { top:0, left: 0, behavior: "smooth" } )
  }

  return (
    <StyledGoToTop onClick={ goToBtn }>
        <ArrowUp />
    </StyledGoToTop>
  )
}
