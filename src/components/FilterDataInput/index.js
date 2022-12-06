import React, {useState, useEffect} from 'react'

import { View, TextInput, TouchableOpacity } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import styles from './styles'

const FilterDataInput = ( props ) => {

    // console.log(props);
    const [text, setText] = useState(props.filterText);
    // const [filterText, setFilterText] = useState(text);

    function setTextVal(val) {
        console.log(val)
        setText(val)
        props.setFilterText(val)
        props.getFilteredData(val)
    }

    function inputFilterClose() {
        props.setVisible(false)
        props.setFilterText(null)
        props.resetData(true)
        props.showBottom()
        // console.log(props.inputVisible)
    }

    return (
        <View style={styles.filterView}>
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
                onPress={() => inputFilterClose()}
            >
                <MaterialIcons name='search-off' color={'#fff'} size={35}/>
            </TouchableOpacity>
        </View>
                
    );
}

export default FilterDataInput;