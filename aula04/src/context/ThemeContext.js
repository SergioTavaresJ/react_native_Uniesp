import React, { createContext, useState } from 'react'

const ThemeContext = createContext({
    theme: 'light',
    toogleTheme: () => { },

})

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    function toogleTheme() {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            {children}

        </ThemeContext.Provider>

    )

}

export default ThemeContext