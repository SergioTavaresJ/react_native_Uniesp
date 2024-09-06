import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio5 = () => {

    const [tarefa, setTarefa] = useState('')

    const [lista, setLista] = useState([])

    const addtarefa = () => {
      if (tarefa.trim()) {
        setLista([...lista, {id:Date.now().toString(), value:tarefa}])
        setTarefa('')
      }
    }


  return (
    <View style={styles.container}>
       
        
      <View style={styles.header}/>
      <Text>Lista De Tarefas</Text>
      <View style={styles.inputContainer}/>
      <TextInput
        placeholder='Digite uma nova Tarefa'
        style={styles.input}
        value={tarefa}
        onChangeText={(text) => setTarefa(text)}
      />
      <Button title='Adicionar' onPress={addtarefa}/>
      <FlatList 
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            <Text>{item.value}</Text>
            </View>
        )}
      />
      
    </View>
    
    
  )
}

const styles=StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
        flex: 1,
        padding: 20,
    },
    header: {
        padding: 15,
        alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
    },
    input: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      marginRight: 10,
      borderRadius: 5,
    },
    taskItem: {
      padding: 15,
      backgroundColor: '#fff',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      borderRadius: 5,
      marginTop: 10,
    },
    title: {
      fontSize: 24,
      
    }  
})

export default Exercicio5