import { FlexContainer } from "../UI"
import { ChatBottom, ChatTop, Messages } from "..";

export const Chat = () => {
  return(
    <FlexContainer type="column" width="70%" backgroundColor="black_default" radiusRight="s" bgOpacity=".6" >
      <ChatTop />
      <Messages />
      <ChatBottom />
    </FlexContainer>
  )
}
