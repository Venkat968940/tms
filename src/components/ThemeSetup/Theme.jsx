import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material"
import { ComponentOverride } from "./ComponentOverride"

export const ThemeSetup = ({children}) =>{
    let theme = createTheme()
    theme = responsiveFontSizes(theme)
    theme.components = ComponentOverride(theme)
    
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}