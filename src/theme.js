import {createContext, useState, useMemo} from "react";
import {createTheme} from "@mui/material";

//color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
            ? {
                primary: {
                    500: '',
                    600: '',
                    700: '',
                },
                accent: {
                    500: '',
                    600: '',
                    700: '',
                }
            }
            : {}
    )
})

//mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.accent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.primary[500]
                    },
                }
                : {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.accent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: '#FCFCFC'
                    },
                }),
            typography: {
                fontFamily: [].join(','),
                fontsize: 12,
                h1: {
                    fontsize: 40,
                },
                h2: {
                    fontsize: 35,
                },
                h3: {
                    fontsize: 30,
                },
                h4: {
                    fontsize: 25,
                },
                h5: {
                    fontsize: 20,
                },
                h6: {
                    fontsize: 18,
                },

            },
        }
    }
}

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

export const useMode = () => {
    const [mode, setMode] = useState('dark')
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
        }), []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}