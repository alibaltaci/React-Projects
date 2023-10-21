import { Form, Formik } from "formik"
import * as Yup from "yup"
import { FlexContainer, Input, ReactIconReturner } from "../UI"

export const ChatBottom = () => {

    const icons = ["file", "image", "send"] 

    const validationSchema = Yup.object().shape({
        message: Yup.string() 
    })
    const initialValues = {
        message: ""
    }

    const onSubmit = ( value, {resetForm})=> {
        console.log(value)
        resetForm()
    }

    
    return(
        <Formik
            as={Formik} 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <FlexContainer 
            as={Form}
            type="row" backgroundColor="black_default" bgOpacity=".9" height="3rem" radiusThree="s" align="center" width="100%" paddingLeft=".3rem"
            >
                    <Input name="message"  widthInput="100%" width="80%" height="95%"  color="black_default" paddingHorizonal="1rem" placeholder="Message..." textSize="min" bgColor="white_default" bgOpacity=".9" />
                    <FlexContainer type="row"  center gap="1rem" width="20%" >  
                        {
                            icons.map( icon => (
                                <ReactIconReturner key={icon} icon={icon} />
                                ))
                            }
                    </FlexContainer>
            </FlexContainer>
        </Formik>
    )
}