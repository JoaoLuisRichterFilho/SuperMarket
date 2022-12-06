import React, {useState, useEffect} from 'react'

import { Modal, View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

const ModalAddLista = ( props ) => {

    // console.log(props);

    const [text, setText] = useState(null);
    const [id, setId] = useState(null);

    useEffect(() => {
        setText(props.listaName);
    }, [props.listaName])

    useEffect(() => {
        setId(props.listaId);
    }, [props.listaId])

    return (
        <Modal style={styles.modal}
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            //   setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity 
                        style={styles.btnCloseModal}
                        onPress={() => {props.setModalVisible(!props.modalVisible)}}
                    >
                        <Ionicons name='close' color={'#fff'} size={20}/>
                    </TouchableOpacity>
                    <Text style={styles.modalText}>
                        Nome da lista
                    </Text>
                    <View style={styles.viewNewLista}>
                        <TextInput
                            nativeID='inpuNewLista' 
                            value={text} 
                            autoFocus={true}
                            placeholder='Nome da lista...'
                            style={styles.inputNewLista}
                            onChangeText={setText}
                        />
                        <Text style={{flex: 1, paddingTop:10, paddingLeft: 8}}>
                            <TouchableOpacity 
                                style={styles.confirmNewList}
                                onPress={() => {(props.listaId === null) ? props.saveLista(text) : props.editLista(props.listaId, text)}}
                            >
                                <Ionicons name='checkmark' color={'#fff'} size={20}/>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </View>
      </Modal>
    );
}

export default ModalAddLista;