import React, {useState, useEffect} from 'react'

import { Modal, View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import SelectDropdown from 'react-native-select-dropdown'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const ModalAddProduto = ( props ) => {

    // console.log(props);

    const [text, setText] = useState(props.produtoName);
    const [id, setId] = useState(props.produtoId );
    

    useEffect(() => {
        props.setProdutoId(props.produtoId)
        // setId(props.produtoId);
    }, [props.produtoId])

    useEffect(() => {
        props.setProdutoName(props.produtoName)
        setText( (props.produtoId ) ? props.produtoName : "");
    }, [(props.produtoId ) ? props.produtoName : ""])

    function closeModal() {
        props.setProdutoId(null)
        props.setProdutoName(null)
        setText(null)
        props.setCadVisible(!props.modalVisible)
    }

    function save(val) {
        props.saveProduto(val)
        closeModal()
    }

    function edit(id, val) {
        props.editProduto(id, val)
        closeModal()
    }

    const dropdownIcon = () => { return ( <Ionicons name='caret-down-outline' color={'#000'} size={20}/> ) }
    const searchIcon = () => {return ( <MaterialIcons name='search' size={16} style={styles.btnFilterIcon}/> )}

    const produtosLista = [
        "Arroz", "Feijão", "Massa", "Carne", "Farinha",
        "Tomate", "Queijo", "Alface"
    ]

    const DropdownProdutos =
        <SelectDropdown
            data={produtosLista}
            search={true}
            searchPlaceHolder="Pesquise..."
            renderSearchInputLeftIcon={searchIcon}
            defaultButtonText="Selecione"
            renderDropdownIcon={dropdownIcon}
            buttonStyle={styles.selectQTD}
            buttonTextStyle={styles.selectQTDtext}
            selectedRowStyle={styles.selectQTDselected}
            defaultValue={(text ? text : null)}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setText(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />

    return (
        <Modal style={styles.modal}
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            //   setVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity 
                        style={styles.btnCloseModal}
                        onPress={() => closeModal()}
                    >
                        <Ionicons name='close' color={'#fff'} size={20}/>
                    </TouchableOpacity>
                    <Text style={styles.modalText}>
                        Nome do produto:
                    </Text>
                    <View style={styles.viewNewProduto}>
                        <TextInput
                            nativeID='inpuNewProduto' 
                            value={text} 
                            autoFocus={true}
                            placeholder='Nome do produto...'
                            style={styles.inpuNewProduto}
                            onChangeText={setText}
                        />
                        {/* <View>
                            {DropdownProdutos}
                        </View> */}
                        <Text style={{flex: 1, paddingTop:10, paddingLeft: 8}}>
                            <TouchableOpacity 
                                style={styles.confirmNewProduto}
                                onPress={() => {(props.produtoId === null) ? save(text) : edit(props.produtoId, text)}}
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

export default ModalAddProduto;