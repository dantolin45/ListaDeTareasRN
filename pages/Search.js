import { useRecipeCreatedContext } from "../context/recipeContext";
import { Formik, Form, Field } from "formik";
import * as yup from "yup"


const Search = () => {
    const context = useRecipeCreatedContext();
    console.log(context)
    const schema = Yup.object().shape({

        search: Yup.string()
            .max(200, 'Maximo 30 caracteres')
            .required('Required'),

    });
    const formik = useFormik({

        initialValues: { search: "" },
        validationSchema: schema,
        onSubmit: async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            context.AddRecipe(values);
        }

    })
    return (
        <div className="searchbar">

            <Form className="form-container" onSubmit={formik.handleSubmit}>
                <h1 className="searchlabel"></h1>
                <div className="form-group">
                    <Field
                        type="text"
                        label="Buscar receta"
                        name="search"
                        onChangue={formik.handleChange}
                    >

                    </Field>
                    {formik.errors.title ? <b className="error-message">{formik.errors.title}</b> : null}
                </div>
                <button className="logInButton" type="submit">buscar</button>
            </Form>


        </div>
    )
}
export default Search;