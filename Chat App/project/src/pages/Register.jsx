import { register } from "../data/data.json"
import { Button, FlexContainer, Form, Input, Typography } from "../components"


function Register() {

    const { title, formTitle, button, content, formElement } = register

  return (
    <FlexContainer type="column" align="center" justify="center" >

    <div style={{backgroundImage: `url("./images/message-thomas-peham.jpg")`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"}}>
        <FlexContainer 
            type="column" 
            align="center" 
            justify="center" 
            backgroundColor="navy_blue" 
            bgColorOpacity={0.7} 
            gap="2rem" 
            borderRadius="s" 
            border={`3px solid salmon`}
            // transformOptions={["tablet","center" ,"center"]}
            maxWidth="90%"
            maxHeight="100%"
        >   
            <Typography elementType="h1" text={ title } color="salmon" variant="title_4xl" />
            <Form title={formTitle} >
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
                    } )
                }
                <Button text={button} route="" buttonType="secondary" size="s" radius="xs" variant="salmon" />
            </Form>
            <Typography text={content} variant="paragraph_s" paddingBottom="1rem"/>
        </FlexContainer>
    </div>
    </FlexContainer>

  )
}

export default Register