import { StyleSheet } from 'react-native';
// import { color } from 'react-native-elements/dist/helpers';

// import Ionicons from 'react-native-vector-icons/Ionicons'

import {colors, fonts} from '../../globalStyles'

const styles = StyleSheet.create({
    mainDiv: {
        flex: 1,
        backgroundColor: colors.appBG,
        backgroundImage: 'linear-gradient(315deg, {colors.appBG} 0%, #969ca0 38%, #dfdbdb 99%)',
    },
    title: {
        fontFamily: fonts.appTitle,
        // fontWeight: '700',
        fontSize: 25,
        color: '#fff',
        paddingTop: 10,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImg: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
    },
    body: {
        flex: 3,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.appBGBody,
        paddingTop: 50,
    },
    btnListas: {
        paddingVertical: 10,
        // paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: colors.appBG,
        marginVertical: 20,
        minWidth: 150,
        alignItems: 'center',
    },
    btnProdutos: {
        paddingVertical: 10,
        // paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: colors.btnScreenBG,
        marginVertical: 20,
        minWidth: 150,
        alignItems: 'center',
    },
    textButton: {
        fontSize: 18,
        color: colors.btnScreenTxt,
        fontWeight: '700',
    },
    btnIcon: {
        color: colors.btnScreenTxt,
        fontSize: 18,
        fontWeight: 'bold',
    }
    
})

export default styles;