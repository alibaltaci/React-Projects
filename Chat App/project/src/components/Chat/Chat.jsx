import { ChatBottom, ChatTop, Messages } from "..";
import { StyledChat } from "./StyledChat";

export const Chat = () => {
  return(
    <StyledChat  width="70%" backgroundColor="black_default" radiusRight="s" bgOpacity=".6" >
      <ChatTop />
      <Messages />
      <ChatBottom />
    </StyledChat>
  )
}
