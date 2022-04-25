import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Headline } from 'react-native-paper';

const SelectShronkyDonk = () => {
    const [imageNumber, setImageNumber] = useState("000");
    
    const generateNewNumber = () => {
      let randomNumber = Math.floor(Math.random() * 100);
      if (randomNumber < 10){
        randomNumber = "00" + randomNumber;
      } else if (randomNumber > 9 && randomNumber < 100) {
        randomNumber = "0" + randomNumber;
      } else randomNumber = randomNumber;
      setImageNumber(randomNumber);
      return;
    }

    return (
        <View style={styles.container}>
            <View 
            style={{ 
                width: 200, 
                height: 200,
            }} 
            >
                <ImageBackground 
                    source={require('../assets/svg/ShronkyDonk' + imageNumber + ".svg")}
                    style={{
                    width: 200,
                    height: 200,
                    }}
                    resizeMode="contain"
                >
                    <Text 
                        style={{
                        display: "flex",
                        flex: 1,
                        justifyContent:"center",
                        alignItems: "center",
                        fontSize: 8,
                        color: "#000000",
                        }}
                    >
                        ShronkyDonk{imageNumber}
                    </Text>
                </ImageBackground>
        </View>
        <Headline style={{fontWeight: 700,}}>ShronkyDonks</Headline>
        <Text style={{padding: 10, textAlign: "center",}}>
            The ShronkyDonks are a fixed set of 101 items that come in a wide variety of colors.
        </Text>
        <View style={{margin: 10,}} />
        <Button mode="contained" onPress={generateNewNumber} style={{backgroundColor: "#000000"}}>
            See Another ShronkyDonk
        </Button>
      </View>
    )
}

export default SelectShronkyDonk

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})