import React from 'react'

import { View, Text } from 'react-native'

// import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

const AppVersion = ( props ) => {
    const version = "v1.0.0"
    return (
        <View style={styles.version}>
            <Text style={styles.versionText}>{version}</Text>
        </View>
    );
}

export default AppVersion;