import { register } from "../data/data.json"
import { CommonForm } from "../components"


function Register() {

    return(
        <CommonForm data={register} />
    )
}

export default Register