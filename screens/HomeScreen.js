import React from 'react'
import { StyleSheet, View } from 'react-native'
import SelectShronkyDonk from '../components/SelectShronkyDonk'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <SelectShronkyDonk />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
