import { useColorMode, useColorModeValue } from "@chakra-ui/react"

export const darkColors = {
    background: '#222629',
    foreground: '#ffffff',
    primaryLight: '#87C232',
    secondaryLight: '#799F4C',
    primaryDark: '#2e3438',
    secondaryDark: '#6A6E71',
}

export const lightColors = {
    background: '#ffffff',
    foreground: '#222629',
    primaryLight: '#76a63a',
    secondaryLight: '#87C232',
    primaryDark: '#6A6E71',
    secondaryDark: '#2e3438',
}

export const useColor = (key: string) => {
    const mode = useColorMode()
    return mode.colorMode === 'light' ? lightColors[key] : darkColors[key]
}