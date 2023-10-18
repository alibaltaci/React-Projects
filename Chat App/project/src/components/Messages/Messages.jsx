import { Message } from ".."
import { FlexContainer } from "../UI"

const data = [
    {
        "from": "owner",
        "message": "sdkjfhdffhksdf dfjhsdıfjhosdf sdıkjhfoısdjfı"
    },
    {
        "from": "owner",
        "message": "ksdjhf ıodjfosdj osdhfosdf jsdfısdjfoıh sjfıposdjfıo fpsjfıo"
    },
    {
        "from": "user",
        "message": "ldkfdsjsjf sfoıd pojfd"
    },
    {
        "from": "user",
        "type": "image",
        "message": "./images/chat-bg.jpg"
    },
    {
        "from": "owner",
        "message": "şlkjf dpjfsdf  spoıjfdf psjfjdf ffjds"
    },
    {
        "from": "owner",
        "type": "image",
        "message": "./images/message-thomas-peham.jpg"
    },
]

export const Messages = () => {
    return(
        <FlexContainer type="column" overflow="scroll-y" height="100%" >

            {
                data.map( el => (
                   <Message key={el.message} data={el}/>
                ))
            }
      </FlexContainer>
    )
}