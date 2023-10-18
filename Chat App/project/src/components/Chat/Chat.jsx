import { FlexContainer } from "../UI"
import { ChatTop, Messages } from "..";

export const Chat = () => {
  return(
    <FlexContainer type="column" width="70%" backgroundColor="black_default" radiusRight="s" bgOpacity=".6" >
      <ChatTop />
      <Messages />
    </FlexContainer>
  )
}
