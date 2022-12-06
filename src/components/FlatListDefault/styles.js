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
        backgroundColor: colors.listBG,
    },
    flatListButton: {
        flex: 5,
        justifyContent: 'flex-start',
        paddingHorizontal: metrics.flatListButtonPadH,
        paddingVertical: metrics.flatListButtonPadV,
        marginVertical: metrics.flatListButtonMarV,
    },
    flatListButtonEdit: {
        paddingHorizontal: metrics.flatListButtonEditPadH,
        paddingVertical: metrics.flatListButtonEditPadV,
    },
    flatListButtonDel: {
        paddingHorizontal: metrics.flatListButtonDelPadH,
        paddingVertical: metrics.flatListButtonDelPadV,
    },
    flatListText: {
        fontFamily: fonts.listTxt,
        color: '#333',
        flex: 1,
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