import { createTheme } from '@mui/material/styles';

const chsBlack = "#000000";
const chsGrey = "#757575";
const chsWhite = "#ffffff";

const theme = createTheme({
    palette: {
        common: {
            chsBlack,
            chsGrey
        },
        primary: {
            main: chsBlack,
        },    
        secondary: {
            main: chsGrey
        }
    },
    // typography: {
    //     h3: 300,
    //     color: chsWhite
    // }
});

export default theme;