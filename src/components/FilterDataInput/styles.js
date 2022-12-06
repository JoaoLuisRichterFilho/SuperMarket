import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 
    filterView:{
      flex: 1,
      borderRadius: 15,
      flexDirection: 'row',
      backgroundColor: '#FFF',
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
        backgroundColor: 'red',
    }
});

export default styles;