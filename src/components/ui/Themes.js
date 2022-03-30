import { createTheme } from '@mui/material/styles';

const chsBlack = "#000000";
const chsGrey = "#757575";
const chsWhite = "#ffffff";
const chsLightGrey = "#cccccc";

const theme = createTheme({
    palette: {
        common: {
            chsBlack,
            chsGrey,
            chsLightGrey
        },
        primary: {
            main: chsBlack,
        },    
        secondary: {
            main: chsGrey
        }
    },
    typography: {
        primary: {
            fontSize: "1rem",
            color: chsWhite
        },
        secondary: {
            fontSize: "1rem",
            color: chsWhite
        }
    }
});

export default theme;