import { createTheme } from '@mui/material/styles';
import { fontSize } from '@mui/system';

const chsBlack = "#000000";
const chsGray = "#757575";
const chsWhite = "#ffffff";
const chsLightGray = "#cccccc";
const chsRed = "#ff0000";

const theme = createTheme({
    palette: {
        common: {
            chsBlack,
            chsGray,
            chsLightGray,
            chsRed
        },
        primary: {
            main: chsBlack,
        },    
        secondary: {
            main: chsGray
        }
    },
    typography: { 
        primary: {
            fontSize: "1rem",
            color: chsWhite
        },
        secondary: {
            fontSize: "1rem",
            color: chsBlack
        },
        tab: {
            textTransform: "none",
            fontSize: "1rem"
        },
    },
    button: {
        primary: {
            color: chsRed,
        }
    }

});

export default theme;