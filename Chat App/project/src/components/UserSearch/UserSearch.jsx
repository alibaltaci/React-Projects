import { Form, Formik } from "formik"
import { FlexContainer, Input } from "../UI"
import * as Yup from "yup"
import { useState } from "react"
import { TiDelete } from "react-icons/ti"


export const UserSearch = () => {

    const [ find, setFind ] = useState("")
    // const [ user, setUser ] = useState(null)
    // const [ err, setErr ] = useState(false)

    console.log(find)

    const validationSchema = Yup.object().shape({
        find: Yup.string() 
    })
    const initialValues = {
        find: ""
    }

    return(
        <FlexContainer as={Formik} type="column" 
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
        <Form>
            <FlexContainer type="row" backgroundColor="black_default" align="center" justify="space-between" paddingHorizonal="1rem" >
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
                width="100%"
                value={find}
                onChange={ e => {setFind(e.target.value)} }
            />
            { find && <TiDelete color="white" size="1.4rem" onClick={() => setFind("")}  /> }
            </FlexContainer>
        <div style={{
            borderBottom:"1px solid white"
        }} />
        </Form>
        </FlexContainer>
    )
}