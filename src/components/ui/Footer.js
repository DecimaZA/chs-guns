import React from "react";
import theme from "./Themes";
import chsLogo from './chsLogo.png';
import { NavLink } from "react-router-dom";
//MUI imports
import { experimentalStyled as styled } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material";
import { Box, Grid, Typography, Paper } from "@mui/material";

const today = new Date();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Footer = () => {
    return(
        // <Box sx={{ backgroundColor: "black", flexGrow: 1 }}>
        //     <Grid container columnSpacing={1} padding={ "2rem" } spacing={{ xs: 2, md: 1 }} columns={{ xs: 1, sm: 2, md: 3 }} >
        //         <Typography variant="h6" theme={theme} sx={{ mr: 2, display: { xs: "none", md: "flex" } }} align="center" >                
        //             <Grid item xs={3} sm={3} md={6} padding={ "2rem" }>
        //                 <Grid container direction="column">
        //                     <NavLink
        //                         to={'/home'}                
        //                     >                           
        //                         HOME                           
        //                     </NavLink>
        //                 </Grid>  
        //             </Grid>
        //             <Grid item xs={3} sm={3} md={6} padding={ "2rem" }>  
                        // <NavLink
                        //     to={'/products'}                
                        // >                           
                        //     PRODUCTS                           
                        // </NavLink>
        //             </Grid>
        //             <Grid item xs={3} sm={3} md={6} padding={ "2rem" }>  
        //                 <NavLink
        //                     to={'/accessories'}                
        //                 >                           
        //                     ACCESSORIES                           
        //                 </NavLink>
        //             </Grid>
                        
        //         </Typography>                    
        //     </Grid>
        // </Box>

        <Box sx={{ backgroundColor: "black", width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={1} md={3}>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/home'}>                           
                        HOME                           
                    </NavLink>
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/products'}>                           
                        PRODUCTS                           
                    </NavLink>
                </Grid>
                <Grid item xs={1} md={3}>
                    
                </Grid>
                <Grid item xs={1} md={3}>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/accessories'}>                           
                        ACCESSORIES                           
                    </NavLink>
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/services'}>                           
                        SERVICES                           
                    </NavLink>
                </Grid>
                <Grid item xs={1} md={3}>
                    
                </Grid>
                <Grid item xs={1} md={3}>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/faq'}>                           
                        FAQ                           
                    </NavLink>
                </Grid>
                <Grid item xs={12} sm={12} md={3} textAlign='center'>
                    <NavLink to={'/contact'}>                           
                        CONTACT US                           
                    </NavLink>
                </Grid>
                <Grid item xs={1} md={3}>
                    
                </Grid>  
            </Grid>
            <Grid container rowSpacing={2}>
                <Grid item xs={1} md={3}>
                    
                </Grid>
                <Grid item xs={12} sm={10} md={12} textAlign='center'>
                    <Typography color="white">
                        COPYRIGHT CHS GUNS {today.getFullYear()}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    
                </Grid>
            </Grid>
        </Box>
    );
};







//         <ThemeProvider theme={theme}>
//             <Box position="absolute" sx={{ flexGrow: 1, width: "100%", height: "200px", backgroundColor: "#000000" }}>
//                 <Typography component="span" theme={theme} variant="primary">
//                     {pages.map((page) => (
//                     <NavLink key={page} to={`/${page}`}>
//                         <Grid container direction="row" spacing={{ xs: 2, md: 1 }} columns={{ xs: 3, sm: 3, md: 3 }} justify="center">
//                             <Grid item>
//                                 <Grid container direction="column">
//                                     <Grid item>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item>
//                                 <Grid container direction="column">
//                                     <Grid item>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item>
//                                 <Grid container direction="column">
//                                     <Grid item>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item>
//                                 <Grid container direction="column">
//                                     <Grid item>
//                                         {/* <Link href='/'>
//                                             <img src={chsLogo} alt="logo" flex="1" width="100" />
//                                         </Link> */}
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item>
//                                 <Grid container direction="row" spacing={2}>
//                                     <Grid item >
//                                         {page}
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
                            
//                         </Grid>
//                     </NavLink>
//                     ))}
//                     {/* <Typography justify="center" fontSize={12}>
//                         <span fontSize="1px">COPYRIGHT CHS GUNS {today.getFullYear()}</span>
//                     </Typography> */}
                    
//                 </Typography>
//             </Box>
//         </ThemeProvider>
//     );
// };

export default Footer;