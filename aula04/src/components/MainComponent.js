import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const MainComponent = () => {

    const { theme, toogleTheme } = useContext(ThemeContext)

    return (
        <View style={[styles.container, theme === 'dark' ? styles.dark : styles.light]}>
            <Text style={theme === 'dark' ? styles.darkText : styles.lightText}>
                O tema atual é : {theme}
            </Text>
            <Button title="Mudar o tema" onPress={toogleTheme} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dark: {
        backgroundColor: '#333',
    },
    light: {
        backgroundColor: '#FFF',
    },
    darkText: {
        color: '#FFF',
    },
    lightText: {
        color: '#333',
    },
})

export default MainComponent