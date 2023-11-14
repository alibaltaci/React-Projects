import { Form, Formik } from "formik"
import { FlexContainer, Input, Typography } from "../UI"
import * as Yup from "yup"
import { useState } from "react"
import { TiDelete } from "react-icons/ti"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { UserCard } from "../UserCard/UserCard"


export const UserSearch = () => {

    const [find, setFind] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [showNoUserMessage, setShowNoUserMessage] = useState(false);

    const getAllUsers = async () => {
        try {
          // "users" koleksiyonundaki tüm belgeleri çek
          const usersCollection = collection(db, "users");
          const usersSnapshot = await getDocs(usersCollection);
      
          // Belge verilerini al
          const usersData = usersSnapshot.docs.map((doc) => ({
            uid: doc.id,
            ...doc.data(),
          }));
      
          console.log("All Users:", usersData);
      
          // usersData dizisini kullanarak istediğiniz işlemleri gerçekleştirin
        } catch (error) {
          console.error("Error fetching all users:", error);
        }
      };
      
      // Fonksiyonu çağır
      getAllUsers();

    const handleSearch = async () => {
        setLoading(true);
        setUsers([]);
        setErr(false);
        setShowNoUserMessage(false);
    
        const q = query(
          collection(db, "users"),
          where("displayName", "==", find.toLowerCase())
        );
    
        try {
          const querySnapshot = await getDocs(q);
    
          const foundUsers = querySnapshot.docs.map((doc) => doc.data());
          setUsers(foundUsers);

          if (foundUsers.length === 0) {
            setShowNoUserMessage(true);
    
            setTimeout(() => {
              setShowNoUserMessage(false);
            }, 3000);
          }
        } catch (error) {
          setErr(true);
        } finally {
          setLoading(false);
        }
      };

    console.log("find -->", find)
    console.log("user -->", users)
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
            onSubmit={handleSearch}
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
                            // onKeyDown={handleKey}
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

            { loading && <Typography text="Loading..." color="white_default" />}

            { showNoUserMessage && (
                <>
                    <Typography text="No user found." color="white_default" />
                    <TiDelete color="white" size="1.4rem" onClick={ () => setShowNoUserMessage(false) }/>
                </>
            )}

            {!loading && users.length > 0 && (
                <>
                    {users.map((user, index) => (
                        <UserCard key={index} userData={user} />
                    ))}
                </>
            )}
            
            { err &&  <Typography text="Error" elementType="span" color="white_default" variant="paragraph_s" /> }

        </FlexContainer>

    )
}