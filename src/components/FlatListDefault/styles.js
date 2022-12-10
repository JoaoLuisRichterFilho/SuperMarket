import { StyleSheet } from 'react-native';

// import Ionicons from 'react-native-vector-icons/Ionicons'

import {colors, fonts, metrics} from '../../globalStyles'

const styles = StyleSheet.create({

    separator: {
        height: 1,
        backgroundColor: colors.listSeparator,
    },
    flatListItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: colors.listBG,
    },
    flatListButton: {
        flex: 5,
        paddingHorizontal: metrics.flatListButtonPadH,
        paddingVertical: metrics.flatListButtonPadV,
        marginVertical: metrics.flatListButtonMarV,
    },
    infosExtras: {
        flex: 1,
        flexDirection: "row",
        // marginTop: 3,
    },
    produtoQtd: {flex: 1},
    datetime: {flex: 1},
    produtoValor: {flex: 6},
    flatListButtonEdit: {
        paddingHorizontal: metrics.flatListButtonEditPadH,
        paddingVertical: metrics.flatListButtonEditPadV,
    },
    flatListButtonDel: {
        paddingHorizontal: metrics.flatListButtonDelPadH,
        paddingVertical: metrics.flatListButtonDelPadV,
    },
    flatListText: {
        flex: 1,
        fontWeight: "700",
        fontFamily: fonts.listTxt,
        color: '#333',
        fontSize: metrics.flatListText,
    },
    delIcon: {
        flex: 1,
        color: '#fff',
        paddingVertical: metrics.flatListIconPadV,
        paddingHorizontal: metrics.flatListIconPadH,
        marginVertical: metrics.flatListIconMarV,
        marginHorizontal: metrics.flatListIconMarH,
        backgroundColor: colors.btnDelBG,
        borderRadius: 4,
    },
    editIcon: {
        flex: 1,
        color: '#333',
        paddingVertical: metrics.flatListIconPadV,
        paddingHorizontal: metrics.flatListIconPadH,
        marginVertical: metrics.flatListIconMarV,
        marginHorizontal: metrics.flatListIconMarH,
        backgroundColor: colors.btnEditBG,
        borderRadius: 4,
    },
    textDashed: {
        color: colors.listTxtSuccess,
        textDecorationLine: 'line-through'
    },

})

export default styles;