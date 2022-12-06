import { StyleSheet } from 'react-native';

// import Ionicons from 'react-native-vector-icons/Ionicons'

import {colors, fonts, metrics} from '../../globalStyles'

const styles = StyleSheet.create({

    //Main ##################################
    mainDiv: {
        flex: 1,
        backgroundColor: colors.appBG,
        backgroundImage: 'linear-gradient(315deg, {colors.appBG} 0%, #969ca0 38%, #dfdbdb 99%)',
    },

    //Header #################################
    btnHome: {
        backgroundColor: colors.btnNavigationBG,
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
    },
    title: {
        fontFamily: fonts.appTitle,
        // fontWeight: '700',
        fontSize: metrics.titleText,
        color: '#fff',
        paddingTop: metrics.titlePaddingTop,
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImg: {
        justifyContent: 'center',
        alignItems: 'center',
        height: metrics.headerImgHeight,
        width: metrics.headerImgWidth,
    },
    headerSubtitle: {
        fontFamily: fonts.listName,
        fontSize: metrics.subtitleText,
        color: colors.appHederTxt,
        fontWeight: '700',
        marginTop: 10,
    },
    subtitleIcon: {
        fontSize: metrics.subtitleIcon,
    },

    //Body ###################################
    body: {
        flex: 4,
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: colors.appBGBody,
    },
    btnIcon: {
        color: colors.btnNavigationTxt,
        fontSize: 18,
    },
    btnNewLista: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 30,
        backgroundColor:colors.btnSuccessBG
    },
    btnIconNewLista: {
        fontWeight: '700',
    },
})

export default styles;