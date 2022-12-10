import React, {useState, useEffect } from 'react';
import { Alert, Text, Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import FeatherIcons from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'
import ModalAddLista from '../../components/ModalAddLista';
import FlatListDefault from '../../components/FlatListDefault';

import AppVersion from '../../components/AppVersion';

export function Listas({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [listaId, setListaId] = useState(null);
    const [listaName, setListaName] = useState(null);
    const [listas, setListas] = useState();

    useEffect(() => { // Carrega a lista ao abrir a Screen
      getData() //Busca a lista na base
      .then(data => //Então seta a lista
        setListas(data)
      );
    }, [])

    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Listas')
        // console.log(JSON.parse(jsonValue))
        return jsonValue != null ? JSON.parse(jsonValue) : [];
      } catch(e) {
        console.log(e)
        Alert.alert("Erro!", "Erro ao carregar as listas")
      }
    }

    async function storeData(value) {
      // console.log("value: " + value)
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Listas', jsonValue)
        // setListas(getData())
        console.log('lista salva!')
      } catch (e) {
        console.log(e)
        Alert.alert("Erro!", "Erro ao salvar")
      }
    }

    function delLista ( id ) {
      let tempListas = [...listas] //transpoem a lista pra variável
      tempListas.forEach( (element, key) => {  //percorre a nova lista
        if(element.id === id) { // checa se o current id for igual ao parametro
          if(tempListas.splice(key, 1)) { // remove 1 item cuja key corresponde
            setListas(tempListas) // seta a nova lista pro state
            storeData(tempListas) // armazena a nova lista na base
          }
        }
      })
    }


    function getCurrentDateTime(format = "pt", time = false, seconds = false){

      let sec = ''

      if(time && seconds)
        sec = ':ss'

      if(format == "pt")
        return moment().utcOffset('-03:00').format('DD/MM/YYYY' + (time ? ' HH:mm'+sec:''))
      else if(format == 'us') 
        return moment().utcOffset('-03:00').format('DD/MM/YYYY' + (time ? ' HH:mm'+sec:''))

    }

    // console.log(getCurrentDateTime("pt",true,false));

    function newLista ( newVal ) {
      
      let tempListas = [...listas]
      let id = tempListas.length;

      console.log("id: "+id)
      let addVal = {
        "id": id,
        "title": newVal,
        "datetime": getCurrentDateTime("pt",true,false)
      }
      // console.log(addVal);
      // console.log(listas)
      // console.log(tempListas)

      if(tempListas.push(addVal)) {
        setListas(tempListas)
        storeData(tempListas) // armazena a nova lista na base
        setModalVisible(false)
      }

    }

    function setListaState(id, title) {
      setListaId(id)
      setListaName(title)
    }

    function openModalCad(id, title) {
      setListaState(id, title)
      setModalVisible(true)
    }

    function openLista(id, listaName) {
      // console.log('listaId: '+listaId)
      navigation.push('Produtos', {listaId: id, listaName: listaName})
    }

    function editLista ( id, newVal ) {
      
      let tempListas = [...listas]

      tempListas.forEach( (element, key) => {  //percorre a nova lista
      if(element.id === id) { // checa se o current id for igual ao parametro
          tempListas[key].title = newVal;
          setListas(tempListas) // seta a nova lista pro state
          storeData(tempListas) // armazena a nova lista na base
        }
      })

    }

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainDiv}>
          <View style={styles.header}>

            <TouchableOpacity 
              style={styles.btnHome}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.btnHomeText}>
                <Ionicons name='home' style={styles.btnIcon} />
              </Text>
            </TouchableOpacity>

            <AppVersion/>

            <Image style={styles.headerImg} source={require('../../assets/shopping-bag.png')} />
            
            <Text style={styles.title}>
              Supermarket List
            </Text>

            <Text style={styles.headerSubtitle}>
              <FeatherIcons name='list' style={styles.subtitleIcon} /> Minhas Listas
            </Text>

          </View>
            <View style={styles.body}>

              <FlatListDefault 
                openModalCad={openModalCad}
                setItemId={setListaId} 
                setItemName={setListaName} 
                delItem={delLista} 
                openLista={openLista}
                dados={listas} 
              />

              <TouchableOpacity 
                style={styles.btnNewLista}
                onPress={() => openModalCad(null, null)}
              >
                <Text>
                  <FeatherIcons color={'#fff'} size={40} name='plus' style={styles.btnIconNewLista}/>
                </Text>
              </TouchableOpacity>
            </View>
            <ModalAddLista
              saveLista={newLista}
              listaId={listaId} 
              listaName={listaName} 
              editLista={editLista} 
              setModalVisible={setModalVisible} 
              modalVisible={modalVisible} 
            />
        </View>
      </SafeAreaView>
    );
}