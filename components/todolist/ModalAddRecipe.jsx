
import React, { useState } from "react";
import Modal from 'react-native-modal';
import { Button, Text, View } from "react-native";
import '../../styles/ModalAddRecipe.css'
import FormikAddRecipe from "./FormikAddRecipe";
const ModalAddRecipe = () => {


    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);


    return (
        <>

            <Button variant="primary" title=" Añadir nueva receta" className="userItem " onPress={handleShow} />
            <FormikAddRecipe/>
            <Modal isVisible={show}>
                <View style={{ flex: 1 }}>
                     <FormikAddRecipe/>


                    <Button variant="primary" title="Cerrar" className="userItem" onPress={handleClose} />
                </View>
            </Modal>

        </>
    )
}

export default ModalAddRecipe;