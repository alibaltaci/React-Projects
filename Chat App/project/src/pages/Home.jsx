import { Chat, Sidebar } from "../components"
import { BackgroundImageContainer } from "../components/UI"
import { useGlobalContext } from "../contexts/GlobalContext"
import { StyledHome } from "./StyledHome"

function Home() {

  const {isResponsive, isVisible} = useGlobalContext()
  
  return ( 
    <BackgroundImageContainer 
      imageUrl="./images/chat-bg.jpg" 
      height="100vh"
      center
      verticalImgPosition="bottom"
      loading="lazy"
      alt="Balloon Chat"
      width="100%"
    >
      <StyledHome type="row" border="1px solid white" radius="s" width="80%" height="90%"   >
        { (isResponsive || !isVisible) ? !isVisible && <Sidebar /> : <Sidebar /> }
        { isVisible && <Chat /> }
         
      </StyledHome>

    </BackgroundImageContainer>
  )
}

export default Home