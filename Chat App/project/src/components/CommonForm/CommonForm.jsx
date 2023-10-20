import BalloonChatIcon from "../UI/Icons/BalloonChatIcon"
import { BackgroundImageContainer, Button, FlexContainer, Form, Input, Typography } from "../index"


export function CommonForm({data}) {

    const { title, formTitle, button, content, formElement } = data

  return (
    <FlexContainer type="column" align="center" justify="center" >
        <BackgroundImageContainer 
            imageUrl="./images/message-thomas-peham.jpg" 
            loading="lazy" 
            alt="balloon" 
            height="100vh"
            overflow="hidden"
            verticalImgPosition="bottom"
        >

        <FlexContainer 
            type="column" 
            align="center" 
            justify="center" 
            backgroundColor="navy_blue" 
            bgColorOpacity={0.7} 
            gap="1rem" 
            radius="s" 
            border={`3px solid salmon`}
            // transformOptions={["tablet","center" ,"center"]}
            maxWidth="90%"
            width="30rem"
        >   
            <FlexContainer type="row" marginTop="1rem" center gap="1rem" >
                <Typography elementType="h1" text={ title } color="salmon" variant="title_4xl"  />
                <BalloonChatIcon />
            </FlexContainer>
            <Form title={formTitle}  >
                {
                    formElement.map( el => {
                        const { id, type, placeholder, required } = el
                

                            return <Input 
                                    key={id} 
                                    type={ type } 
                                    // placeholder={ placeholder }
                                    isRequired={required}
                                    title={placeholder}
                                    titleVariant="title_m"
                                    paddingVertical="8px"
                                    paddingHorizonal="8px"
                                    outline
                                    radius="xs"
                                    />
                                }
                    )
                }

                <Button text={button} route="" buttonType="secondary" size="s" radius="xs" variant="salmon" marginTop="9rem" />
            </Form>
            <Typography text={content} variant="paragraph_s" marginBottom="1rem" color="salmon"/>
        </FlexContainer>
        </BackgroundImageContainer>
    </FlexContainer>

  )
}
