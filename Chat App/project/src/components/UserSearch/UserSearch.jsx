import { Form, Formik } from "formik"
import { FlexContainer, Input } from "../UI"
import * as Yup from "yup"
import { useState } from "react"
import { TiDelete } from "react-icons/ti"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { UserCard } from "../UserCard/UserCard"


export const UserSearch = () => {

    const [ find, setFind ] = useState("")
    const [ user, setUser ] = useState(null)
    const [ err, setErr ] = useState(false)

    const handleSearch = async() => {
        
        const q = query( collection(db, "users"), where("displayName", "==", find) )
        const allUsers = collection( db, "users")
        console.log("all users" , allUsers)

        try {

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach( (doc) => {
                setUser( doc.data() )
                console.log( doc.id, "=>", doc.data() )
            })
            
        } catch (error) {
            setErr(true)
        }
    }

    console.log("find -->", find)
    console.log("user -->", user)
    console.log("err -->", err)

    const validationSchema = Yup.object().shape({
        find: Yup.string() 
    })
    const initialValues = {
        find: ""
    }

    return(
        <FlexContainer type="column">

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
                    onKeyDown={handleSearch}
                    onChange={ e => setFind(e.target.value)
                    }
                />
                { find && <TiDelete color="white" size="1.4rem" onClick={ () => setFind("") }/> }
                </FlexContainer> 
            <div style={{
                borderBottom:"1px solid white"
            }} />
            </Form>
            </FlexContainer>

            { user && <UserCard userData={{"displayName": "ali", "messages": ["my message", "my message2", "my message3"] }} />}

        </FlexContainer>

    )
}