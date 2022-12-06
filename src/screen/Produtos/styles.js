import { StyleSheet } from 'react-native';
// import { color } from 'react-native-elements/dist/helpers';

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
    btnBack: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 4,
        backgroundColor: colors.btnNavigationBG,
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
    },
    title: {
        fontFamily: fonts.appTitle,
        fontWeight: '400',
        fontSize: metrics.titleText,
        color: colors.appHederTxt,
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

    //Header Subtitle ###########################
    headerSubtitle: {
        marginTop: metrics.headerSubtitleMarginTop,
        flexDirection: 'row',
        paddingHorizontal: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    //Filter Button ###########################
    headerSubtitleText:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerSubtitleFilter:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitleText: {
        fontFamily: fonts.listName,
        fontSize: metrics.subtitleText,
        color: '#fff',
        fontWeight: '700',
    },
    subtitleIcon: {
        fontSize: metrics.subtitleIcon,
    },
    btnFilter:{
        backgroundColor: colors.btnFindBG,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    btnFilterText: {
        fontSize: 16,
        color: colors.btnFilterText
    },
    btnFilterIcon:{
        fontSize: 16,
    },

    //Refresh Button ###########################
    headerSubtitleRefresh : {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //Body ###################################
    body: {
        flex: 4,
        flexDirection: 'column',
        borderTopWidth: 1,
        borderTopColor: colors.appBG,
        backgroundColor: colors.appBGBody,
        borderBottomWidth: 1,
        borderBottomColor: colors.appBG,
    },
    
    btnIcon: {
        color: colors.appBG,
        fontSize: 18,
    },
    viewFlatList: {
        flex: 4,
    },
    viewBottom: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:colors.appBG,
    },   
    viewProdutosTotal: {
        flex: 4,
        justifyContent:'center',
        // backgroundColor: 'red',
    },
    textProdutosTotal: {
        // flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
        fontSize:16,
        color: colors.totalSupText,
        fontWeight: 'bold'
    },
    textProdutosTotalValor: {
        // flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
        fontSize:20,
        color: colors.totalSubText,
        fontWeight: 'bold'
    },
    viewProdutosQtd: {
        flex: 2,
        justifyContent:'center',
        // alignItems: 'center'
        // backgroundColor: 'red',
    },
    textProdutosQtd: {
        // flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
        fontSize:16,
        color: colors.totalSupText,
        fontWeight: 'bold'
    },
    textProdutosQtdValor: {
        // flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
        fontSize:20,
        color: colors.totalSubText,
        fontWeight: 'bold'
    },
 
    viewBtnAdd: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    btnNewProduto: {
        width: '66%',
        fontWeight: 'bold',
        padding: '10%',
        borderRadius: 30,
        backgroundColor: colors.btnSuccessBG
    },
    btnIconNewProduto: {
        fontWeight: '700',
    },
})

export default styles;