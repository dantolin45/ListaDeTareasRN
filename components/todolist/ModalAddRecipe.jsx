
import React, { useState } from "react";
import Modal from 'react-native-modal';
import { View } from "react-native";
import '../../styles/ModalAddRecipe.css'
import FormikAddRecipe from "./FormikAddRecipe";


const ModalAddRecipe = () => {


    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);
    

    return (
        <>

            <button variant="primary" title=" Añadir nueva receta" className="userItem" onClick={handleShow}><b className="b-button-recipe">Añadir receta</b></button>
            
            <Modal isVisible={show}>
                
                <View >
                    <FormikAddRecipe/>
                    

                    <button  className="userItem" onClick={handleClose}> <b className="b-button-recipe">Cerrar</b> </button>
                </View>
            </Modal>

        </>
    )
}

export default ModalAddRecipe;