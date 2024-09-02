import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Exercicio4 from './src/components/Exercicio4'

const App = () => {

  const meusItens = ['notebook, mouse, teclado, placa de video, controle']
  return (
    <SafeAreaView>
      <Exercicio4 itens={meusItens}/>
    </SafeAreaView>
  )
}

export default App