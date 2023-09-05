import { StyledGoToTop } from "./StyledGoToTop";
import ArrowUp from "../../Common/Icons/ArrowUp";
import { useEffect, useState } from "react";

export default function GoToTop() {

  const [isVisible, setIsVisible] = useState(false)

  const goToBtn = () => {
    window.scrollTo( { top:0, left: 0, behavior: "smooth" } )
  }

  const listenToScroll = () => {
    let heightToHidden = 250;

    // for all browsers  ( body || html )
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if( winScroll > heightToHidden ){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
    
  }

  useEffect( () => {

    window.addEventListener( "scroll", listenToScroll )

    return () => window.removeEventListener("scroll", listenToScroll)

  }, [] )


  return (
      <>
        { isVisible  &&
          <StyledGoToTop onClick={ goToBtn }>
              <ArrowUp />
          </StyledGoToTop>
        }
      </>
  )
}
