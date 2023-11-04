import React, { useEffect } from "react";
import '../styles/UserLogin.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUserFunctions } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const LogIn = () => {

    const context = useUserFunctions();
    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required("Un nombre es requerido"),

        password: Yup.string()
            .required("Una contraseña es requerida")
            .min(8, "La contraseña debe de constar de al menos 8 caracteres"),

    });
    function isLogged(){
        if(context.Logged === true)
        {
            alert("Te has logeado")
            navigate("/")
        }
        else{
            
            navigate("/userlogin")
        }
    }
    useEffect(()=>{
        isLogged()
    },[context.Logged])
   
   

    return (
        <>
            <div class="container">
                <div class="cards">
                    <section class="register-account">
                        <div class="signform">
                            <div class="right">
                                <div class="headit">
                                    <h4>Inicia Sesion</h4>
                                </div>
                                <div class="form">
                                    <Formik
                                        initialValues={{
                                            name: '',
                                            password: ''
                                        }}
                                        validationSchema={SignupSchema}
                                        onSubmit={async (values) => {
                                            await new Promise((r) => setTimeout(r, 500));
                                            context.setUserFormik(values);

                                        }}
                                    >

                                        <Form class="login-form" id="login-form">
                                            <label> Usuario:
                                                <Field
                                                    type="text"
                                                    placeholder="Introduce tu usuario"
                                                    name="name"
                                                    autoCapitalize="true"
                                                    maxLength="8"
                                                    size="100"
                                                    required
                                                    autoComplete="off"
                                                />
                                            </label>
                                            <p className="error-message">
                                                <ErrorMessage className="error-message" name="name" />
                                            </p>

                                            <label> Contraseña: <Field
                                                
                                                type="password"
                                                placeholder="Contraseña"
                                                name="password"
                                                autoCapitalize="false"
                                                size="100"
                                                required
                                            /></label>
                                            <p className="error-message">
                                                <ErrorMessage name="password" />
                                            </p>
                                            <button class="subbt" type="submit" value="Sign In">Entra!</button>
                                        </Form>

                                    </Formik>
                                                  
                                
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}
export default LogIn;