import { StyleSheet } from "react-native";

const width_proportion = '100%';

const styles = StyleSheet.create({
    modal: {
        
    },
    modalView: {
      marginHorizontal: 20,
      marginVertical: 20,
      backgroundColor: "#fefefe",
      borderRadius: 6,
      borderWidth: 3,
      borderColor: '#827d89',
      paddingHorizontal: 25,
      paddingVertical: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height: 300,
    },
    btnCloseModal: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 5,
      backgroundColor: 'red',
      borderRadius: 4,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: "left"
    },
    produtoNome: {
      fontSize: 16,
      borderBottomColor: "#000",
      borderBottomWidth: 2,
      marginBottom:10,
    },
    inputValor: {
        // flex: 1,
        fontSize: 16,
        borderBottomWidth: 1,
        marginVertical:10,
    },
    viewQTD: {
      flex: 1,
      flexDirection: 'row'
    },
    labelQtd: {
      fontSize: 16,
      marginBottom: 5,
      marginTop: 10,
    },
    selectQTD:{
      backgroundColor: '#D1D1D1',
      borderRadius: 6,
      height: 40,
      width: 110,
    },
    selectQTDtext:{
      fontSize: 16,
    },
    selectQTDselected: {
      backgroundColor: '#D1D1D1'
    },
    inputQtd: {
        // flex: 1,
        fontSize: 16,
        borderBottomWidth: 2,
        marginVertical:10,
    },
    checkIcon: {
      // backgroundColor: 'green',
      borderColor: "red",
      fillColor: "green",
    },
    checkedIcon: {
      backgroundColor: "green",
      borderColor: "green",
    },
    viewNewProduto: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 15,
    },
    confirmNewProduto: {
        // flex: 1,
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#1CCB1C',
        borderRadius: 4,
        
        // marginBottom:5,
    },
    modalHeader: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    groupComprar: {
      flex: 5,
      width: width_proportion,
      flexDirection: 'row',
    },
    subGroupComprar1: {
      flex: 5,
      // flexDirection: 'row',
      // justifyContent: 'center',
      // alignContent: 'center',
      padding: 5,
    },
    subGroupComprar2: {
      flex: 1,
      // flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkbox: {
      marginTop: 20,
    }
});

export default styles;