import { Chat, Sidebar } from "../components"
import { BackgroundImageContainer } from "../components/UI"
import { StyledHome } from "./StyledHome"
     
function Home() {

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
        <Sidebar />
        <Chat /> 
      </StyledHome>

    </BackgroundImageContainer>
  )
}

export default Home