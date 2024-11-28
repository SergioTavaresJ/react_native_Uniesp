import { View, Text, TouchableOpacity, } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProvedorCartoesEstudo } from './src/contexts/CartoesEstudoContext'
import EdicaoCartaoScreen from './src/screens/EdicaoCartaoScreen'
import { AuthContext, AuthProvider } from './src/contexts/AuthContext'
import TarefasVencimentoProximoScreen from './src/screens/TarefasVencimentoProximoScreen'
import LoginScreen from './src/screens/LoginScreen'
import RegistroScreen from './src/screens/RegistroScreen'
import { MaterialIcons } from 'react-native-vector-icons'
import ListaCartaoScreen from './src/screens/ListaCartaoScreen'

const Stack = createStackNavigator()

const AppNavigator = () => {
  const { user, loading, logout } = useContext(AuthContext)

  if (loading) {
    return null;

  }

  return (
    <Stack.Navigator initialRouteName={user ? 'ListaCartao' : 'Login'}>
      {user ? (
        <>
          <Stack.Screen
            name='ListaCartao'
            component={ListaCartaoScreen}
            options={{
              title: 'Cartões de Estudo',
              headerRight: () => (
                <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
                  <MaterialIcons name='logout' size={24} color="#ff6347" />
                </TouchableOpacity>
              )
            }}
          />
          <Stack.Screen name="EdicaoCartao" component={EdicaoCartaoScreen} options={{ title: 'Editar Cartão' }} />
          <Stack.Screen name='TarefasVencimentoProximo' component={TarefasVencimentoProximoScreen} options={{ title: 'Tarefas a Vencer' }} />
        </>
      ) : (
        <>
          <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'login' }} />
          <Stack.Screen name='Registro' component={RegistroScreen} options={{ title: 'Criar Conta' }} />
        </>

      )}
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <ProvedorCartoesEstudo>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ProvedorCartoesEstudo>
    </AuthProvider>
  )
}

export default App