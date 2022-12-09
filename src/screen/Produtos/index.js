import React, {useState, useEffect } from 'react';
import { Alert, Text, Image, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";
import urid from 'urid'

import FeatherIcons from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'
// import ModalAddProduto from '../../components/ModalAddProduto';
import ModalProduto from '../../components/ModalProduto';
import FilterDataInput from '../../components/FilterDataInput';

import FlatListDefault from '../../components/FlatListDefault';

import AppVersion from '../../components/AppVersion';

export function Produtos({ route, navigation }) {

    //##############################################################
    const [modalProdutoVisible, setModalProdutoVisible] = useState(false);
    const [inputSearchVisible, setInputSearchVisible] = useState(false);
    const [bottomVisible, setBottomVisible] = useState(true);

    const [listaId, setListaId] = useState(null);
    const [listaName, setListaName] = useState(null);
    const [produtoId, setProdutoId] = useState(null);
    const [produtoName, setProdutoName] = useState(null);
    const [produtoStatus, setProdutoStatus] = useState(null);
    const [produtoValor, setProdutoValor] = useState(null);
    const [produtoQtd, setProdutoQtd] = useState(null);
    
    const [filterText, setFilterText] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    const [produtos, setProdutos] = useState([]);
    const [produtosAux, setProdutosAux] = useState([]);
    const [produtosTotal, setProdutosTotal] = useState(0.00);
    const [produtosQtd, setProdutosQtd] = useState(0);
    //##############################################################


    //USE EFFECT / PRE-LOAD FUNCTIONS ############################
    useEffect(() => { // Carrega o produto ao abrir a Screen
      getData() //Busca o produto na base
      .then(data => //Então seta o produto
        setProdutosAux(data),
      );
    }, [])

    useEffect(() => { // Carrega o produto ao abrir a Screen
      getData() //Busca o produto na base
      .then(data => //Então seta o produto
        setProdutos(data),
      );
    }, [])

    useEffect(() => { // Carrega o produto ao abrir a Screen
      getData() //Busca o produto na base
      .then(data => {//Então seta o produto
        getTotal(data)
        // console.log(data)
      })
    }, [])

    useEffect(() => { // Carrega o produto ao abrir a Screen
      setListaName(route.params.listaName)
    }, [route.params.listaName])

    useEffect(() => { // Carrega o produto ao abrir a Screen
      setListaId(route.params.listaId)
    }, [route.params.listaId])
    //##############################################################

    //ALERT FUNCTIONS #######################################
    const showToastSuccess = () => {
        ToastAndroid.show("Salvo!", ToastAndroid.SHORT);
    };

    const showToastFaill = () => {
        ToastAndroid.show("Falha ao salvar!", ToastAndroid.SHORT);
    };
    //##############################################################

    //STORE FUNCTIONS #######################################
    async function storeData(value) {
      // console.log("value: " + value)
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@store_prod_lista_'+listaId, jsonValue)
        // setProdutos(getData())
        console.log('produto salvo!')
        showToastSuccess();
      } catch (e) {
        showToastFaill();
        console.log(e)
        Alert.alert("Erro!", "Erro ao salvar")
      }
    }

    async function getData(listaId = route.params.listaId) {
      // console.log('@store_prod_lista_'+listaId)
      try {
        const jsonValue = await AsyncStorage.getItem('@store_prod_lista_'+listaId)
        // console.log(JSON.parse(jsonValue))
        return jsonValue != null ? JSON.parse(jsonValue) : [];
      } catch(e) {
        console.log(e)
        Alert.alert("Erro!", "Erro ao carregar as produtos")
      }
    }

    function newProduto ( nome, valor, qtd, status ) {

      console.log(nome)

      let tempProdutos = [...produtosAux]
      let id = urid(8, 'num')
      console.log("id: "+id)
      let addVal = {
        "id": id,
        "title": nome,
        "produtoValor": valor,
        "produtoQtd": qtd,
        "produtoStatus": status
      }
      // console.log(removeEspecialChar(nome))
      console.log(addVal);
      // console.log(produtos)
      // console.log(tempProdutos)

      if(tempProdutos.push(addVal)) {
        setProdutos(tempProdutos)
        setProdutosAux(tempProdutos)
        storeData(tempProdutos) // armazena o novo produto na base
        setProdutoId(null) 
        // setProdutoName(null)
        getTotal(tempProdutos)
      }

    }

    function delProduto ( id ) {
      let tempProdutos = [...produtosAux] //transpoem o produto pra variável
      let deleted = false
      tempProdutos.forEach( (element, key) => {  //percorre o novo produto
        // const index = array.indexOf(element);
        if(element.id === id) { // checa se o current id for igual ao parametro
          // console.log(id)
          // console.log(produtosAux.splice(key, 1))
          if(produtosAux.splice(key, 1))
          {
            deleted = true
          }
        }
      })

      if(deleted) {
        setProdutos(produtosAux) // seta o novo produto pro state
        setProdutosAux(produtosAux)
        storeData(produtosAux) // armazena o novo produto na base
        getTotal(produtosAux)
      }
      
    }

    function comprarProduto ( id, nome, valor, qtd, status ) {

        if(!id){
          newProduto(nome, valor, qtd, status)
          return true
        }

        let tempProdutos = [...produtosAux]
        
        tempProdutos.forEach( (element, i) => {
          // console.log(element);
          // console.log(i);
          // valor = clearMoney(valor)
          valor = parseFloat(valor)
          if(element.id === id) {
            element.produtoValor = valor;
            element.produtoQtd = qtd;
            element.produtoStatus = status;
            console.log(produtoValor);
            console.log('found and change!');
          }
        });
        
        if(tempProdutos) {
          setProdutos(tempProdutos)
          setProdutosAux(tempProdutos)
          storeData(tempProdutos) // armazena o novo produto na base
          getTotal(tempProdutos)
          console.log(produtosTotal)
        }

    }
    //##############################################################
    

    //STATE FUNCTIONS ######################################
    function setProdutoState(id, title, valor, qtd, stat) {
      setProdutoId(id)
      setProdutoName(title)
      setProdutoValor(valor)
      setProdutoQtd(qtd)
      setProdutoStatus(stat)
    }

    function openModalProduto(id, title, valor, qtd, stat) {
      setProdutoState(id, title, null, null, false)
      setProdutoState(id, title, valor, qtd, stat)
      setModalProdutoVisible(true)
      // console.log('entrou aqui')
    }

    function closeModalProduto() {
      setModalProdutoVisible(false)
    }

    // function clearMoney(valor) {
    //   // console.log(valor);
    //   if(valor &&  valor.length > 0) {
    //     // console.log('aqui');
    //     valor = valor.replace("R$","").replace(" ","").replace(".","").replace(",",".");
    //     // console.log(valor);
    //     return valor;
    //   }else
    //     return 0.00;
    // }

    function resetData(close = false) {
      // console.log(produtosAux)
      if(!close)
      {
        // console.log(produtosAux)
        if(produtosAux.length > 0 && (produtos.length <= 0 || filterText.length <= 0)) {
          setProdutos(produtosAux)
          getTotal(produtosAux)
        }
      } 
      else
      {
        if(produtosAux.length > 0) {
          setProdutos(produtosAux)
          getTotal(produtosAux)
        }
      }

    }

    function removeEspecialChar (especialChar){
      especialChar = especialChar.replace('/[áàãâä]/ui', 'a');
      especialChar = especialChar.replace('/[éèêë]/ui', 'e');
      especialChar = especialChar.replace('/[íìîï]/ui', 'i');
      especialChar = especialChar.replace('/[óòõôö]/ui', 'o');
      especialChar = especialChar.replace('/[úùûü]/ui', 'u');
      especialChar = especialChar.replace('/[ç]/ui', 'c');
      especialChar = especialChar.replace('/[^a-z0-9]/i', '_');
      especialChar = especialChar.replace('/_+/', '_'); //
      especialChar = especialChar.replace(/ /g, '_'); //
      return especialChar;
    }

    function getFilteredData(filter) {
      let tempProdutos = [...produtosAux] //transpoem o produto pra variável
      let newLista = []

      //Ordenate array
      // tempProdutos.sort((a,b) => a.title - b.title);
    
      // console.log(produtosAux)
      if(filter && filter.length > 0) {
        tempProdutos.forEach( (element, key) => {  //percorre o novo produto
          
          if(element.title.toLowerCase().includes(filter.toLowerCase())) { // checa se o current id for igual ao parametro
            // console.log(element.title)  
            newLista.push(element)
          }
        })
        // console.log(newLista)
        setProdutos(newLista) // seta o novo produto pro state
        // getTotal(newLista)
      } else {
        resetData(true)
      }

    }

    function getTotal(data){

      // console.log(data);

      let tempProdutos = [...data]
      let total_geral = 0.00;
      let total = 0;
      let qtd = 0;

      tempProdutos.forEach( (element) => {  //percorre o novo produto
          if(element.produtoStatus && element.produtoValor > 0 && element.produtoQtd > 0) { // checa se o current id for igual ao parametro
              total = element.produtoValor * element.produtoQtd;
              // console.log(parseFloat(clearMoney(element.produtoValor)))
              // console.log(parseFloat(clearMoney(element.produtoQtd)))

              if(total >= 0) {
                // console.log('aqui 2')
                total_geral += total;
                // console.log(total_geral)
              }
          }
          qtd++
      })

      if(total_geral > 0) {
        // console.log(total_geral)
        setProdutosTotal( formatCurrency({ amount: total_geral.toFixed(2), code: "BRL" })[0])
        // console.log(formatCurrency({ amount: total_geral, code: "BRL" }));
      }

      setProdutosQtd(qtd)
      
    }

    function openFilter() {
      setInputSearchVisible(true)
      setBottomVisible(false)
    } 

    function showBottom() {
      setBottomVisible(true)
    }
    //##############################################################

    //FRONT END CONSTS #####################################
    const filterDataField = 
      <FilterDataInput
        filterText={filterText}
        getFilteredData={getFilteredData}
        setFilterText={setFilterText}
        resetData={() => resetData(true)}
        setFilteredData={setFilteredData}
        inputVisible={inputSearchVisible}
        setVisible={setInputSearchVisible}
        showBottom={showBottom} 
      /> 
    
    const headerSubtitleContent = 
      <>
          <View style={styles.headerSubtitleText}>
              <Text style={styles.subtitleText}>
                  <FeatherIcons name='list' style={styles.subtitleIcon}/> {listaName}
              </Text>
          </View>
          {/* <View style={styles.headerSubtitleRefresh}>
              <TouchableOpacity 
                style={styles.btnRefresh}
                onPress={ () => resetData(true) }
              >
                  <Text style={styles.btnRefreshText}>
                    <Ionicons name='sync' style={styles.btnRefreshIcon}/> Recarregar
                  </Text>
              </TouchableOpacity>
          </View> */}
          <View style={styles.headerSubtitleFilter}>
              <TouchableOpacity 
                style={styles.btnFilter}
                onPress={ openFilter }
              >
                  <Text style={styles.btnFilterText}>
                    <MaterialIcons name='search' style={styles.btnFilterIcon}/> Procurar
                  </Text>
              </TouchableOpacity>
          </View>
      </>
    //##############################################################

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainDiv}>
          <View style={styles.header}>

            { (!inputSearchVisible) ? 
              <>
                  <TouchableOpacity 
                    style={styles.btnBack}
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={styles.btnBackText}>
                      <Ionicons name='arrow-back-outline' style={styles.btnIcon} />
                    </Text>
                  </TouchableOpacity>
                  <Image style={styles.headerImg} source={require('../../assets/shopping-bag.png')} />
                  <AppVersion/>
              </>
              : null
            }

            <Text style={styles.title}>
              Supermarket List
            </Text>

            <View style={styles.headerSubtitle}>
                { (inputSearchVisible) ? filterDataField : headerSubtitleContent }
            </View>
          </View>
            <View style={styles.body}>
              <View style={styles.viewFlatList}>
                <FlatListDefault 
                  openModalProduto={openModalProduto}
                  setItemId={setProdutoId} 
                  setItemName={setProdutoName}
                  setItemValor={setProdutoValor}
                  setItemQtd={setProdutoQtd}
                  setStatus={setProdutoStatus}
                  delItem={delProduto} 
                  dados={produtos} 
                />
              </View>
              { (bottomVisible) ? 
              <>
                <View
                  style={styles.viewBottom} >
                  <View style={styles.viewProdutosTotal}>
                    <Text style={styles.textProdutosTotal}>
                      Total comprado:
                    </Text>
                    <Text style={styles.textProdutosTotalValor}>
                      {(produtosTotal?produtosTotal:"R$ 0,00")}
                    </Text>
                  </View>
                  <View style={styles.viewProdutosQtd}>
                    <Text style={styles.textProdutosQtd}>
                      Qtd Itens:
                    </Text>
                    <Text style={styles.textProdutosQtdValor}>
                      {produtosQtd}
                    </Text>
                  </View>
                  <View style={styles.viewBtnAdd}>
                    <TouchableOpacity 
                      style={styles.btnNewProduto}
                      onPress={() => openModalProduto(null, null, null, 1, null)}
                    >
                      <Text>
                        <FeatherIcons color={'#fff'} size={40} name='plus' style={styles.btnIconNewProduto}/>
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
                : null
              }  
            </View>
            {/* <ModalAddProduto
              saveProduto={newProduto}
              produtoId={produtoId} 
              produtoName={produtoName} 
              setProdutoId = {setProdutoId}
              setProdutoName = {setProdutoName}
              editProduto={editProduto}
              setCadVisible={setModalCadVisible} 
              modalVisible={modalEditVisible} 
            /> */}
            <ModalProduto
              comprarProduto={comprarProduto}

              produtoId={produtoId} 
              setProdutoId = {setProdutoId}

              produtoName={produtoName} 
              setProdutoName = {setProdutoName}

              produtoValor={produtoValor}
              setProdutoValor = {setProdutoValor}

              produtoQtd={produtoQtd}
              setProdutoQtd = {setProdutoQtd}

              produtoStatus={produtoStatus}
              setProdutoStatus = {setProdutoStatus}
              
              setVisible={openModalProduto} 
              closeModalProduto={closeModalProduto}
              modalVisible={modalProdutoVisible}

            />
        </View>
      </SafeAreaView>
    );
}