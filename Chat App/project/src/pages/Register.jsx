import { register } from "../data/data.json"
import { CommonForm } from "../components"
import { Formik } from "formik";
import * as Yup from "yup"


function Register() {

    const validationSchema = Yup.object().shape({
        displayName:  Yup.string().required("Name"),
        email: Yup.string().email("Wrong email").required("Email"),
        password: Yup.string().min(6, "Min 6 charecter").required("password"),
        passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "Wrong").required("Confirm"),
        profilePhoto: Yup.mixed()
    })

    const initialValues = {
        displayName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        profilePhoto: undefined
    }

    const onSubmit= ( values, {resetForm} ) => {
        try{
            console.log( {values} )
            resetForm()
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <CommonForm data={register} />

            {/* <Form>
          <div>
            <div>

            <label htmlFor="displayName">Adınız:</label>
            <Field type="text" id="displayName" name="displayName" />
            <ErrorMessage name="displayName" component="div" className="error" />
            </div>
          </div>
          <div>
            <label htmlFor="email">E-posta Adresiniz:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Parolanız:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="passwordConfirmation">Parola Doğrulama:</label>
            <Field type="password" id="passwordConfirmation" name="passwordConfirmation" />
            <ErrorMessage name="passwordConfirmation" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="profilePhoto">Resim Yükle:</label>
            <Field type="file" id="profilePhoto" name="profilePhoto" accept="image/*" />
            <ErrorMessage name="profilePhoto" component="div" className="error" />
          </div>
          <div>
            <button type="submit">Gönder</button>
          </div>
        </Form> */}

            
        </Formik>
    )
}

export default Register