import { createTheme } from '@mui/material/styles';

const chsBlack = "#000000";
const chsGray = "#757575";
const chsWhite = "#ffffff";
const chsLightGray = "#cccccc";

const theme = createTheme({
    palette: {
        common: {
            chsBlack,
            chsGray,
            chsLightGray
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
            color: chsWhite
        },
        tab: {
            textTransform: "none",
            fontSize: "1rem"
        },
    // button: {
    //     primary: {
    //         variant: "contained",
    //         color: chsGrey

    //     }
    // }
    },

});

export default theme;