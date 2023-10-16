import { useFormik } from "formik";
import { Form } from "semantic-ui-react"
import React from "react";

import * as Yup from "yup";


const FormikAddRecipe = () => {

    const typeimagesOptions =[
        {key : "jpg", value: "jpg", text:"JPG"},
        {key : "png", value: "png", text:"PNG"},
        {key : "svg", value: "svg", text:"SVG"}
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
        onSubmit: (formValue)=>{
            alert("Formulario Enviado", formValue)

        }
    })
    return (
        <>
            <Form 
            
            onSubmit={formik.handleSubmit}>
                <Form.Input
                    name="title"
                    
                    value={formik.values.title}
                    placeholder="Titulo"
                    onChange={formik.handleChange}
                />
                <Form.Input
                    name="image"
                  
                    value={formik.values.image}
                    placeholder="Url de la Imagen"
                    onChange={formik.handleChange}
                />
                <Form.Dropdown
                    name="imageType"
                    selection
                    options={typeimagesOptions}
                    value={formik.values.imageType}
                    placeholder="Url de la Imagen"
                    onChange={formik.handleChange}
                    
                />

                <Form.Button type="submit">Submit</Form.Button>
            </Form>


        </>
    );
}  
export default FormikAddRecipe;