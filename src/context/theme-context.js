import React from "react";
//themes examples
export const themes = {
    twitter: {
        name: 'twitter'
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
        name: 'gold'
    }
}

export function getTheme(nameOfTheme) {
    return themes[nameOfTheme].name
}
//export of context
export const themeContext = React.createContext({
    theme: themes,
    toggleTheme: () => {
        console.log('default click')
    }
});