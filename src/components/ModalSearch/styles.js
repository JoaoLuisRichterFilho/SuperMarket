import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalView: {
      marginHorizontal: 20,
      marginVertical: 40,
      backgroundColor: "#fefefe",
      borderRadius: 20,
      borderWidth: 3,
      borderColor: '#827d89',
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height: 80,
    },
    modalViewBody:{
      flex: 1,
      borderRadius: 20,
      flexDirection: 'row',
    },
    filterIcon: {
      fontSize: 20,
    },
    filter: {
      flex: 7,
      paddingLeft: 5,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      fontSize: 16,
      paddingVertical: 15,
      backgroundColor: '#fff'
    },
    confirmSearch: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        padding: 5,
        backgroundColor: 'green',
    }
});

export default styles;