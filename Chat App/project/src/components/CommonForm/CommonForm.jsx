import BalloonChatIcon from "../UI/Icons/BalloonChatIcon"
import { BackgroundImageContainer, Button, FlexContainer, FormComponent, Input, Typography } from ".."
// import { ErrorMessage } from "formik";


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
            radius="s" 
            border={`3px solid salmon`}
            // transformOptions={["tablet","center" ,"center"]}
            maxWidth="90%"
            width="30rem"
        >   

            <FlexContainer type="row" marginTop=".8rem" center gap="1rem" >
                <Typography elementType="h1" text={ title } color="salmon" variant="title_4xl"  />
                <BalloonChatIcon />
            </FlexContainer>

            <FormComponent title={formTitle} >
                    {
                        formElement.map( el => {
                            const { id, type, placeholder, required, name } = el
                    

                                return <Input 
                                        key={id} 
                                        type={ type } 
                                        name={name}
                                        // id={name}
                                        // placeholder={ placeholder }
                                        isRequired={required}
                                        title={placeholder}
                                        titleVariant="title_m"
                                        paddingVertical="8px"
                                        paddingHorizonal="8px"
                                        outline
                                        radius="xs"
                                        marginTop="2rem"
                                        />
                                    }
                        )
                    }
                    <Button text={button} type="submit" route="" buttonType="secondary" size="s" radius="xs" variant="salmon" marginTop="9rem" />
            </FormComponent>

            <Typography text={content} variant="paragraph_s" marginBottom=".8rem" color="salmon"/>
        </FlexContainer>
        </BackgroundImageContainer>
    </FlexContainer>

  )
}
