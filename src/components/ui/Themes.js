import { createTheme } from '@mui/material/styles';

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
            color: chsWhite
        },
        tab: {
            textTransform: "none",
            fontSize: "1rem"
        },
    // button: {
    //     primary: {
    //         variant: "contained",
    //         color: chsGray
    //     }
    // },
        breakpoints: {
            values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
            },
        },
        // footer: {
        //     background
        // }
    },

});

export default theme;