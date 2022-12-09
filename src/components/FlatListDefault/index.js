import React, {useState, useMemo} from "react";

import { Text, View, FlatList, Alert, TouchableOpacity } from 'react-native';

import FeatherIcons from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";

import styles from './styles'

import { metrics } from "../../globalStyles";

const FlatListDefault = ( props ) => {
  
    // console.log(props)

    const Item = ({ item, onPress }) => (
        <View style={styles.flatListItem}>
            <TouchableOpacity onPress={(props.openModalProduto) ? () => props.openModalProduto(item.id, item.title, item.produtoValor, item.produtoQtd, item.produtoStatus) : onPress} style={styles.flatListButton}>
              <Text style={[styles.flatListText, ( item.produtoStatus ? styles.textDashed : null)]}>{item.title}</Text>
              {item.produtoValor || item.produtoQtd ?  
                <View style={styles.produtoDetails}>
                  {item.produtoQtd ?
                    <View style={styles.produtoQtd}>
                      <Text style={{fontSize: 15, fontWeight: "700", color: "#595959"}}>{item.produtoQtd}x</Text>
                    </View>  
                    : null} 
                  {item.produtoValor ? 
                    <View style={styles.produtoValor}>
                      <Text style={{fontSize: 15, fontWeight: "700", color: "#595959"}}>{formatCurrency({ amount: item.produtoValor.toFixed(2), code: "BRL" })[0]}</Text>
                    </View>
                    : null}
                </View>
              : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showConfirmDelLista(item.id)} style={styles.flatListButtonDel}>
              <Ionicons name="trash" size={metrics.flatListIconSize} style={styles.delIcon} />
            </TouchableOpacity>
        </View>

        // <ListItem bottomDivider containerStyle={{
        //   flex: 1,
        //   backgroundColor: "#cecece",
        //   padding: 0,
        // }}>
        //   {/* <Avatar source={{uri: item.avatar_url}} /> */}
        //     <ListItem.Content style={{
        //       flex: 1,
        //       flexDirection: "row",
        //       alignItems: "center",
        //       padding: 0,
        //     }}>
                
        //         <TouchableOpacity onPress={(props.openModalProduto) ? () => props.openModalProduto(item.id, item.title, item.produtoValor, item.produtoQtd, item.produtoStatus) : onPress} style={styles.flatListButton}>

        //             <ListItem.Title>
        //               <Button 
        //                 type="clear"
        //                 onPress={(props.openModalProduto) ? () => props.openModalProduto(item.id, item.title, item.produtoValor, item.produtoQtd, item.produtoStatus) : onPress}
        //                 >
        //                 {item.title}
        //               </Button>
                      
        //             </ListItem.Title>    
        //             {item.produtoValor || item.produtoQtd ?  
        //               <ListItem.Subtitle style={{
        //                 flex: 1,
        //                 flexDirection: "column",
        //                 backgroundColor: "#fafa"
        //               }}>
        //                 {item.produtoQtd ?
        //                   <View style={{flex: 3, backgroundColor:"black"}}>
        //                     <Text>{item.produtoQtd}x</Text>
        //                   </View>  
        //                   : null} 
        //                 {item.produtoValor ? 
        //                   <View style={{flex: 3, backgroundColor:"yellow"}}>
        //                     <Text>{item.produtoValor}</Text>
        //                   </View>
        //                   : null}
        //               </ListItem.Subtitle>
        //             : null}

        //         </TouchableOpacity>

        //         <TouchableOpacity onPress={() => showConfirmDelLista(item.id)} style={styles.flatListButtonDel}>
        //           <Ionicons name="trash" size={metrics.flatListIconSize} style={styles.delIcon} />
        //         </TouchableOpacity>

        //     </ListItem.Content>
        // </ListItem>
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