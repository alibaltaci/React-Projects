import Button from "../components/Button/Button"
import Typography from "../components/Typography/Typography"
import { register } from "../data/data.json"

function Register() {

    const { title, formTitle, button, content, formElement } = register

  return (
    <div style={{backgroundImage: `url("./images/message-thomas-peham.jpg")`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxHeight:"100vh"}}>
        <div >   
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
        </div>
    </div>
  )
}

export default Register