import { Form, Formik } from "formik"
import { FlexContainer, Input } from "../UI"

import * as Yup from "yup"


export const UserSearch = () => {

    const validationSchema = Yup.object().shape({
        find: Yup.string() 
    })
    const initialValues = {
        find: ""
    }

    const onSubmit = ( value, {resetForm})=> {
        console.log(value)
        resetForm()
    }

    return(
        <FlexContainer as={Formik} type="column" 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        <Form>
            <Input 
                name="find"
                placeholder="Find a user" 
                color="white" 
                height="2.5rem" 
                paddingHorizonal="1rem" 
                radius="none" 
                textSize="min" 
                bgColor="black_default" 
                bgOpacity=".8"
            />
        <div style={{
            borderBottom:"1px solid white"
        }} />
        </Form>
        </FlexContainer>
    )
}