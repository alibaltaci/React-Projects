import BalloonChatIcon from "../UI/Icons/BalloonChatIcon"
import { BackgroundImageContainer, Button, FlexContainer, FormComponent, Input, Typography } from ".."
import { Formik } from "formik"
import { Link } from "react-router-dom"
// import { ErrorMessage } from "formik";


export function CommonForm({data, onSubmit, validationSchema, initialValues, errorMessage, stErrorMessage, invalidError}) {

    const { title, formTitle, button, content,  redirectToPage, path, formElement } = data

  return (
    <FlexContainer
        as={Formik} 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        type="column" 
        align="center" 
        justify="center"
        maxHeight="130vh"
    >
        <BackgroundImageContainer 
            imageUrl="./images/message-thomas-peham.jpg" 
            loading="lazy" 
            alt="balloon" 
            height="120vh"
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


            <FormComponent title={formTitle}>

                { invalidError && <Typography text="Email or password is incorrect" color="red_default" variant="paragraph_s" display="block" />}

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
                                        errorMessage={type === "email" && errorMessage }
                                        />
                                    }
                        )
                    }
                    { stErrorMessage && <Typography text="Something Is Wrong" color="red_default" variant="paragraph_s" display="block" />}
                    <Button text={button} type="submit" route="" buttonType="secondary" size="s" radius="xs" variant="salmon" marginTop="9rem" />
            </FormComponent>

            <FlexContainer type="row" gap=".4rem">
                <Typography text={content} variant="paragraph_s" marginBottom=".8rem" color="salmon"/>
                <Link to={path} style={{textDecoration: "none"}} >
                    <Typography text={redirectToPage} variant="paragraph_s" marginBottom=".8rem" color="salmon"/>
                </Link>
            </FlexContainer>
            
        </FlexContainer>
        </BackgroundImageContainer>
    </FlexContainer>

  )
}
