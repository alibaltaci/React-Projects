import { StyledFooterWrapper } from "./StyledFooter"
import FooterTop from "./FooterTop"
import { useGlobalContext } from "../../contexts/GlobalContext"
import { useEffect } from "react"
import FooterBottom from "./FooterBottom"
import FooterContact from "./FooterContact"

function Footer() {

  const { dispatchReturner } = useGlobalContext()

  useEffect( () => dispatchReturner("footer"), [])  
  
  return (
    <StyledFooterWrapper>
      <FooterTop />
      <FooterContact />
      <hr />
      <FooterBottom />
    </StyledFooterWrapper>
  )
}

export default Footer