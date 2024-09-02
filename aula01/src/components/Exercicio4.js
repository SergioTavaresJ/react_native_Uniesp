import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio4 = ({itens}) => {
  return (
    <View style={styles.container}>
        {itens.map((item, index) => (
            <Text key={index} style={styles.itemText}>
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