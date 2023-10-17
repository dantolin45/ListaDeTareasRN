import { useFormik } from "formik";

import 'semantic-ui-css/semantic.min.css'
import { Form } from "semantic-ui-react";
import React from "react";
import * as Yup from "yup";
import { Pressable } from "react-native";

const FormikAddRecipe = () => {
   
    const typeimagesOptions = [
        { key: "jpg", value: "jpg", text: "JPG" },
        { key: "png", value: "png", text: "PNG" },
        { key: "svg", value: "svg", text: "SVG" }
    ]
    const schema = Yup.object().shape({

        title: Yup.string()
            .max(30, 'Maximo 30 caracteres')
            .required('Required'),
        image: Yup.string()
            .required('Required'),
        imageType: Yup.string()
            .required('Required'),
    });

    const formik = useFormik({
        initialValues: { id: 7000, title: "", image: "", imageType: "" },
        validationSchema: schema,
        onSubmit: values => {
            console.log(values)
            alert(JSON.stringify(values, null, 2))

        }
    })
    return (
        <>
            
                <Form className="form-container" onSubmit={formik.handleSubmit}>
                    <h1>Nueva Receta </h1>
                    <div className="form-group">
                        <Form.Input
                            id="title"
                            label="Titulo de Receta"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        {formik.errors.title ? <b className="error-message">{formik.errors.title}</b> : null}
                        
                        <Form.Input
                            id="image"
                            label="Url de Imagen"
                            name="image"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.image}
                        />
                        {formik.errors.image ? <b className="error-message">{formik.errors.image}</b> : null}
                        <Form.Dropdown
                         id="imageType" 
                         name="imageType"  
                         selection
                         options={typeimagesOptions}
                         value={formik.values.imageType}
                         onClick={formik.handleChange}
                         placeholder="Selecciona el tipo de imagen"
                         
                        />

                        {formik.errors.image ? <b className="error-message">{formik.errors.image}</b> : null}
                    </div>
                    
                    <button  className="logInButton" type="submit">Añadir Receta</button>
                </Form>
           
        </>
    );
}
export default FormikAddRecipe;