
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const ModalAddRecipe = ({ onAddTask }) => {
    const taskArray = [];
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [taskId, setTaskId] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        if (!task) {
            alert("Por favor ingrese una tarea");
            return;
        }
        onAddTask({ task, day, reminder });
        setTask("");
        setDay("");
        setReminder(false);
    }
    return (
        <>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Agregar Receta</Text>
                        <div className="form">
                            <Formik
                                initialValues={{ name: "", description: "" }}
                                onSubmit={async (values) => {
                                    await new Promise((resolve) => setTimeout(resolve, 500));
                                    alert(JSON.stringify(values, null, 2));
                                }}
                            >
                                <Form>
                                    <Field name="name" type="text" />
                                    <Field name="email" type="email" />
                                    <button type="submit">Submit</button>
                                    <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                                </Form>
                            </Formik>
                        </div>
                        
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Agregar Receta</Text>
            </Pressable>


        </>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#AAAAAA',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
    }

});
export default ModalAddRecipe;