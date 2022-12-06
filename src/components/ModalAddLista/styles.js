import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modal: {
        
    },
    modalView: {
      marginHorizontal: 20,
      marginVertical: 60,
      backgroundColor: "#fefefe",
      borderRadius: 6,
      borderWidth: 3,
      borderColor: '#827d89',
      paddingHorizontal: 25,
      paddingVertical: 30,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height: 200,
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
        marginBottom: 15,
        textAlign: "left"
    },
    inputNewLista: {
        flex: 7,
        fontSize: 16,
        borderBottomWidth: 3,
    },
    viewNewLista: {
        flexDirection: 'row',
        height: 40,
    },
    confirmNewList: {
        padding: 5,
        backgroundColor: '#1CCB1C',
        borderRadius: 5,
        // marginBottom:5,
    }
});

export default styles;