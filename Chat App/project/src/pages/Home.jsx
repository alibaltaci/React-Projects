import { Chat, Sidebar } from "../components"
import { BackgroundImageContainer, FlexContainer } from "../components/UI"
     
function Home() {

  return ( 
    <BackgroundImageContainer 
      imageUrl="./images/chat-bg.jpg" 
      height="100vh"
      center
      verticalImgPosition="bottom"
      loading="lazy"
      alt="Balloon Chat"
    >
      <FlexContainer type="row" border="1px solid white" radius="xs">
        <Sidebar />
        <Chat /> 
      </FlexContainer>

    </BackgroundImageContainer>
  )
}

export default Home