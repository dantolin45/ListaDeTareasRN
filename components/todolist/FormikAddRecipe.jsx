import { useFormik } from "formik";

import 'semantic-ui-css/semantic.min.css'
import { Form } from "semantic-ui-react";
import React from "react";
import * as Yup from "yup";
import { useRecipeCreatedContext } from "../../context/recipeContext";

const FormikAddRecipe = () => {

    // const typeimagesOptions = [
    //     { key: 1, value: 'jpg', text: 'JPG' },
    //     { key: 2, value: 'png', text: 'PNG' },
    //     { key: 3, value: 'svg', text: 'SVG' }
    // ]
    const context= useRecipeCreatedContext();
    const schema = Yup.object().shape({

        title: Yup.string()
            .max(30, 'Maximo 30 caracteres')
            .required('Required'),
        image: Yup.string()
            .required('Required'),
    });

    const ids = Math.floor(Math.random()*(80000, 1000000));

    const formik = useFormik({
        
        initialValues: { id: ids, title: "", image: ""},
        validationSchema: schema,
        onSubmit : async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(values.id + values.title + values.image);
            
            context.AddRecipe(values);
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
                    {/* <Form.Dropdown
                        id={1}
                        name="imageType"
                        fluid
                        search
                        selection
                        options={typeimagesOptions}
                        values={formik.values.imageType}
                        onClick={formik.handleChange}
                        placeholder="Selecciona el tipo de imagen"

                    />

                    {formik.errors.image ? <b className="error-message">{formik.errors.image}</b> : null} */}
                </div>

                <button className="logInButton" type="submit">Añadir Receta</button>
            </Form>

        </>
    );
}
export default FormikAddRecipe;