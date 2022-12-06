import React, {useState, useMemo} from "react";

import { Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';

import FeatherIcons from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

import { metrics } from "../../globalStyles";

const FlatListDefault = ( props ) => {
  
    // console.log(props)

    const Item = ({ item, onPress }) => (
        <View style={styles.flatListItem}>
            <TouchableOpacity onPress={(props.openModalComprar) ? () => props.openModalComprar(item.id, item.title, item.produtoValor, item.produtoQtd, item.produtoStatus) : onPress} style={styles.flatListButton}>
              <Text style={[styles.flatListText, ( item.produtoStatus ? styles.textDashed : null)]}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.openModalCad(item.id, item.title) } style={styles.flatListButtonEdit}>
              <FeatherIcons name="edit" size={metrics.flatListIconSize} style={styles.editIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showConfirmDelLista(item.id)} style={styles.flatListButtonDel}>
              <Ionicons name="trash" size={metrics.flatListIconSize} style={styles.delIcon} />
            </TouchableOpacity>
        </View>
    )

    const [selectedId, setSelectedId] = useState(null);
    const [showBoxConfirm, setShowBoxConfirm] = useState(true);

    const showConfirmDelLista = ( id ) => {
      return Alert.alert(
        "Confirmação!",
        "Confirma a exclusão do item?",
        [
          // The "Yes" button
          {
            text: "Sim",
            onPress: () => {
              setShowBoxConfirm(false),
              props.delItem(id)
            },
          },
          {
            text: "Não",
            onPress: () => {
              setShowBoxConfirm(false);
            },
          },
        ]
      );
    };

    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => {setSelectedId(item.id), (props.openLista) ? props.openLista(item.id, item.title) : null}}
          backgroundColor={'#fefefe'}
          textColor={'#333'}
        />
      );
    };

    //Facilita a renderização
    const memoizedValue = useMemo(() =>  renderItem, [props.dados]);

    return (

      <FlatList
          ItemSeparatorComponent={
              Platform.OS === 'android' &&
              (({ highlighted }) => (
              <View
                  style={[
                  styles.separator,
                  highlighted && { marginLeft: 0 }
                  ]}
              />
              ))
          }
          data={props.dados}
          renderItem={memoizedValue}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
      />
    );

}

export default FlatListDefault;