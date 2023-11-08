/*------------ReactNative*/
import React, { useState } from "react";
import Modal from 'react-native-modal';
import { View } from "react-native";
/*------------Formik*/
import { useFormik } from "formik";
import * as Yup from "yup";
/*------------Context*/
import { useRecipeCreatedContext, useRecipeFunctions } from "../../context/recipeContext";

/*------------Ui-CSS*/
import { Form } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import '../../styles/ModalAddRecipe.css';




const ModalAddRecipe = () => {


    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);
    const context = useRecipeCreatedContext();
    const contextfunctions = useRecipeFunctions();
    const schema = Yup.object().shape({

        title: Yup.string()
            .max(30, 'Maximo 30 caracteres')
            .required('Debes de llenar este campo'),
        image: Yup.string()
            .required('Debes de llenar este campo'),
        description: Yup.string()
            .required("Debes de llenar este campo")
            .max(100, 'Maximo 100 caracteres')
            .min(30, "Minimo de 30 caracteres")
    });

    const ids = Math.floor(Math.random() * (80000, 1000000));

    const formik = useFormik({

        initialValues: { title: "", image: "", description: "" },
        validationSchema: schema,
        onSubmit: async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            contextfunctions.AddRecipe(values);
        }

    })

    return (
        <>

            <button variant="primary" title=" Añadir nueva receta" className="userItem" id="mainrecipe" onClick={handleShow}><b className="b-button-recipe">Añadir receta</b></button>

            <Modal isVisible={show}>

                <View>

                    <Form className="form-container" onSubmit={formik.handleSubmit}>
                        <div className="cardHeader">
                            <h1>Nueva Receta </h1>
                            <button className="userItem" id="user" onClick={handleClose}>X</button>
                        </div>
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
                            <Form.Input
                                id="description"
                                label="Descripcion de la receta"
                                name="description"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                            {formik.errors.description ? <b className="error-message">{formik.errors.description}</b> : null}
                        </div>

                        <button className="logInButton" type="submit">Añadir Receta</button>
                    </Form>



                </View>
            </Modal>

        </>
    )
}

export default ModalAddRecipe;