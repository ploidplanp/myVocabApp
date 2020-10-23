import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function HowtoPlay() {
    return(
        <View style={styles.container}>
            <Text>How to Play Screen</Text>
        </View>
    )
}

HowtoPlay.navigationOptions = () => {
    return {
        headerTitle: 'How to Play'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})