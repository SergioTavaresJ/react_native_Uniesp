import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio4 = () => {

    const meusItens = ['notebook, mouse, teclado, placa de video, controle']

    
  return (
    <View style={styles.container}>
        {meusItens.map((item, index) => (
            <Text key={index} style={styles.Text}>
                {item}
                </Text>
        ))}

      
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        padding: '100'
    }
})

export default Exercicio4