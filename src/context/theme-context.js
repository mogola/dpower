import React from "react";
//themes examples
export const themes = {
    twitter: {
        name: 'twitter',
        hexa: '#11387A'
    },
    primary: {
        name: 'primary'
    },
    white: {
        name: 'white'
    },
    black: {
        name: 'black'
    },
    gold: {
        name: 'gold',
        hexa: '#0C4DBD'
    }
}

export function getTheme(nameOfTheme) {
    return themes[nameOfTheme].name
}

export function getThemeHexa(nameOfTheme) {
    return themes[nameOfTheme].hexa
}
//export of context
export const themeContext = React.createContext({
    theme: themes,
    toggleTheme: () => {
        console.log('default click')
    }
});