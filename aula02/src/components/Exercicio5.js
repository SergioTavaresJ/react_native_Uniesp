import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'

const Exercicio5 = () => {

    const [tarefa, setTarefa] = useState('')

    const [lista, setLista] = useState([])

    useEffect(() => {
      const carregaTarefa = async () => {
        try {
          const tarefasSalvas = await AsyncStorage.getItem('lista')
          if (tarefasSalvas) {
            setLista(JSON.parse(tarefasSalvas))
          }
        } catch (error) {
          console.log('Erro ao carregar tarefas:' ,error)
        }
      }

      carregaTarefa()
    }, [])

    const salvarTarefa = async (tarefa) => {
      try {
        await AsyncStorage.setItem('lista',JSON.stringify(tarefa))
      } catch (error) {
        console.log('Erro ao salvar tarefas:', error)
      }
    }

    const addtarefa = () => {
      if (tarefa.trim()) {
        const novaListaTarefa = [...lista, {id:Date.now().toString(), value:tarefa}]
        setLista(novaListaTarefa)
        setTarefa('')
        salvarTarefa(novaListaTarefa)
        
      }
    }

    const apagarTarefa = (tarefaId) => {
      novaListaTarefa = lista.filter((item) => item.id !== tarefaId)
      setLista(novaListaTarefa)
      salvarTarefa(novaListaTarefa)
      
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
            <Text style={styles.tarefaText}>{item.value}</Text>
            <Button style={styles.removeButton} onPress={() => apagarTarefa(item.id)}/>
            <Text style={styles.removeButtonText}>Remover</Text>  
            
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
      borderWidth: 1,
      padding: 10,
      marginRight: 10,
      borderRadius: 20,
    },
    taskItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'flex-end'
    },
    removeButton: {
      borderRadius: 5,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    removeButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },   
    tarefaText: {
      textAlign: 'right'
    },
    title: {
      fontSize: 24,
      
    }  
})

export default Exercicio5