import React from 'react';

import { Text, Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles'

import FeatherIcons from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import AppVersion from '../../components/AppVersion';

export function Home({ navigation }) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainDiv}>
          <View style={styles.header}>
            <AppVersion/>
            <Image style={styles.headerImg} source={require('../../assets/shopping-bag.png')} />
            <Text style={styles.title}>
              Supermarket List
            </Text>
          </View>
            <View style={styles.body}>
              <TouchableOpacity 
                style={styles.btnListas}
                onPress={() => navigation.push('Listas')}
              >
                <Text style={styles.textButton}>
                  <FeatherIcons name='list' style={styles.btnIcon} /> Listas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnProdutos}>
                <Text style={styles.textButton}>
                  <Ionicons name='basket-outline' style={styles.btnIcon}/> Produtos
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
}