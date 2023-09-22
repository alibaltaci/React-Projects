import { register } from "../data/data.json"

function Register() {

    const { title, formTitle, button, content, formElement } = register

  return (
    <div>
        <div>
            <h1>{ title }</h1>
            <h3>{ formTitle }</h3>
            <form>
                {
                    formElement.map( el => {
                        const { id, type, placeholder } = el
                        return <input key={id} type={ type } placeholder={ placeholder } />
                    } )
                }
                <button>{ button }</button>
            </form>
            <p> { content } </p>
        </div>
    </div>
  )
}

export default Register