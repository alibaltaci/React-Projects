import Typography from "../components/Typography/Typography"
import { register } from "../data/data.json"

function Register() {

    const { title, formTitle, button, content, formElement } = register

  return (
    <div>
        <div>
            <h1>{ title }</h1>
            <h3>{ formTitle }</h3>
            <Typography elementType="h1" text={ title } color="dark_state_blue" variant="title_4xl" />
            <Typography elementType="h3" text={ formTitle } color="salmon" variant="title_2xl" />
            <form>
                {
                    formElement.map( el => {
                        const { id, type, placeholder } = el
                        return <input key={id} type={ type } placeholder={ placeholder } />
                    } )
                }
                <button>{ button }</button>
            </form>
            <Typography text={content} variant="paragraph_s" />
        </div>
    </div>
  )
}

export default Register