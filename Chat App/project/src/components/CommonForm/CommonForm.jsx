import BalloonChatIcon from "../Icons/BalloonChatIcon"
import { Button, FlexContainer, Form, Input, Typography } from "../index"


export function CommonForm({data}) {

    const { title, formTitle, button, content, formElement } = data

  return (
    <FlexContainer type="column" align="center" justify="center" >

    <div style={{backgroundImage: `url("./images/message-thomas-peham.jpg")`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden"}}
        >
        <FlexContainer 
            type="column" 
            align="center" 
            justify="center" 
            backgroundColor="navy_blue" 
            bgColorOpacity={0.7} 
            gap="1rem" 
            borderRadius="s" 
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
    </div>
    </FlexContainer>

  )
}
