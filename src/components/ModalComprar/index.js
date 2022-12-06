import React, {useState, useEffect, useRef} from 'react'

import { Modal, View, Text, Alert, TextInput, Pressable, TouchableOpacity } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CurrencyInput from 'react-native-currency-input';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SelectDropdown from 'react-native-select-dropdown'

import styles from './styles'

const ModalComprar = ( props ) => {

    const [text, setText] = useState(props.produtoName);
    const [id, setId] = useState(props.produtoId);
    const [valor, setValor] = useState(props.produtoValor);
    const [qtd, setQtd] = useState(props.produtoQtd);
    const [statusProd, setStatus] = useState(props.produtoStatus);

    // if (ref.current.parentElement.offsetWidth)
    //      console.log(ref.current.parentElement.offsetWidth)

    useEffect(() => {
        props.setProdutoId(props.produtoId)
        // setId(props.produtoId);
    }, [props.produtoId])

    useEffect(() => {
        props.setProdutoName(props.produtoName)
        // setText( props.produtoName);
    }, [props.produtoName])

    useEffect(() => {
        props.setProdutoValor(props.produtoValor)
        setValor( props.produtoValor);
    }, [props.produtoValor])

    useEffect(() => {
        props.setProdutoQtd(props.produtoQtd)
        setQtd( props.produtoQtd);
    }, [props.produtoQtd])

    useEffect(() => {
        props.setProdutoStatus(props.produtoStatus)
        setStatus( props.produtoStatus);
    }, [props.produtoStatus])

    function closeModal() {
        props.setProdutoId(null)
        setId(null);

        props.setProdutoName(null)
        setText(null);

        props.setProdutoValor(null)
        setValor(null);

        props.setProdutoQtd(null)
        setQtd(null);

        props.setProdutoStatus(null)
        setStatus(null);

        props.closeModalComprar()
    }

    function comprar(id, val, qtd, status) {
        props.comprarProduto(id, val, qtd, status)
        closeModal()
    }

    const quantidades = [
        "1",  "2",  "3",  "4",  "5",
        "6",  "7",  "8",  "9",  "10",
        "11", "12", "13", "14", "15", 
        "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", 
        "26", "27", "28", "29", "30", 
        "31", "32", "33", "34", "35", 
        "36", "37", "38", "39", "40", 
        "41", "42", "43", "44", "45", 
        "46", "47", "48", "49", "50", 
        "51", "52", "53", "54", "55", 
        "56", "57", "58", "59", "60", 
        "61", "62", "63", "64", "65", 
        "66", "67", "68", "69", "70", 
        "71", "72", "73", "74", "75", 
        "76", "77", "78", "79", "80", 
        "81", "82", "83", "84", "85", 
        "86", "87", "88", "89", "90", 
        "91", "92", "93", "94", "95", 
        "96", "97", "98", "99", "100"
    ] 

    // console.log(qtd)

    const dropdownIcon = () => { return ( <Ionicons name='caret-down-outline' color={'#000'} size={20}/> ) }

    

    const DropdownQTD =
        <SelectDropdown
            data={quantidades}
            defaultButtonText="Selecione"
            renderDropdownIcon={dropdownIcon}
            buttonStyle={styles.selectQTD}
            buttonTextStyle={styles.selectQTDtext}
            selectedRowStyle={styles.selectQTDselected}
            defaultValue={(qtd ? qtd : null)}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setQtd(selectedItem)
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
        
    // console.log(statusProd)
    
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
                        onPress={() => props.closeModalComprar(!props.modalVisible)}
                    >
                        <Ionicons name='close' color={'#fff'} size={20}/>
                    </TouchableOpacity>
                    <View style={styles.viewNewProduto}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalText}>
                                {props.produtoName}
                            </Text>
                        </View>
                        <View style={styles.groupComprar}>
                            <View style={styles.subGroupComprar1}>
                                <CurrencyInput
                                    nativeID='inputValor' 
                                    placeholder='Valor...'
                                    style={styles.inputValor}
                                    value={valor}
                                    onChangeValue={setValor}
                                    prefix="R$ "
                                    delimiter="."
                                    separator=","
                                    precision={2}
                                    onChangeText={(formattedValue) => {
                                        // console.log(formattedValue); // R$2.310,46
                                    }}
                                />
                                <Text style={styles.labelQtd}>
                                    Quantidade:
                                </Text>
                                <View style={styles.viewQTD}>
                                    {DropdownQTD}
                                    {/* <Text>ou</Text>
                                    <TextInput
                                        nativeID='inputQtd' 
                                        value={qtd} 
                                        keyboardType="numeric"
                                        placeholder='Quantidade...'
                                        style={styles.inputQtd}
                                        onChangeText={setQtd}
                                    /> */}
                                </View>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="red"
                                    unfillColor="#FFFFFF"
                                    text="Comprado?"
                                    isChecked={statusProd}
                                    disableBuiltInState
                                    style={styles.checkbox}
                                    iconStyle={[styles.checkIcon, (statusProd ? styles.checkedIcon : null)]}
                                    textStyle={{ }}
                                    onPress={() => setStatus(!statusProd)}
                                />
                            </View>
                                
                        </View>
                    </View>
                    <TouchableOpacity 
                        style={styles.confirmNewProduto}
                        onPress={() => comprar(props.produtoId, valor, qtd, statusProd)}
                    >
                        <Ionicons name='checkmark' color={'#fff'} size={20}/>
                    </TouchableOpacity>
                </View>
            
            </View>
      </Modal>
    );
}

export default ModalComprar;