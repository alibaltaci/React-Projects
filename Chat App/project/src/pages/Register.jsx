import { register } from "../data/data.json"
import { Button, FlexContainer, Typography } from "../components"

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
        <FlexContainer type="column" align="center" justify="center" backgroundColor="navy_blue" bgColorOpacity={0.7} blur >   
            <Typography elementType="h1" text={ title } color="dark_state_blue" variant="title_4xl" />
            <Typography elementType="h3" text={ formTitle } color="salmon" variant="title_2xl" />
            <form>
                {
                    formElement.map( el => {
                        const { id, type, placeholder } = el
                        return <input key={id} type={ type } placeholder={ placeholder } />
                    } )
                }
                <Button text={button} route="" buttonType="secondary" size="s" radius="xs" />
            </form>
            <Typography text={content} variant="paragraph_s" />
        </FlexContainer>
    </div>
    </FlexContainer>

  )
}

export default Register