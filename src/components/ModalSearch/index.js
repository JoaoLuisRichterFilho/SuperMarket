import React, {useState, useEffect} from 'react'

import { Modal, View, Text, Alert, TextInput, TouchableOpacity, requireNativeComponent } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

const ModalSearch = ( props ) => {

    // console.log(props);
    const [text, setText] = useState(props.filterText);
    // const [filterText, setFilterText] = useState(text);

    function setTextVal(val) {
        console.log(val)
        setText(val)
        props.setFilterText(val)
        props.getFilteredData(val)
    }

    useEffect(() => {
        setTextVal(props.filterText);
    }, [props.filterText])

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
                    <View style={styles.modalViewBody}>
                        <View style={{ 
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 10,
                        }}>
                            <Ionicons name='search' style={styles.filterIcon}/>
                        </View>
                        <TextInput
                            nativeID='inputFilter' 
                            value={text}
                            autoFocus={true}
                            placeholder='Pesquisar...'
                            style={styles.filter}
                            onChangeText={(text) => setTextVal(text)}
                        />
                        <TouchableOpacity 
                            style={styles.confirmSearch}
                            onPress={() => {[props.setVisible(!props.modalVisible), props.resetData()]}}
                        >
                            <Ionicons name='checkmark' color={'#fff'} size={35}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
      </Modal>
    );
}

export default ModalSearch;