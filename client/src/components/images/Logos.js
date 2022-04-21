import React from "react";

//Logo imports
// import berettaLogo from './logosFolder/berettaLogo.png';
import glockLogo from './logosFolder/berettaLogo.png';
import sigSauerLogo from './logosFolder/berettaLogo.png';
import taurusLogo from './logosFolder/berettaLogo.png';

//MUI imports
import { Container, Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const logoCollage = () => {
    return (
        <Box sx={{ width: 800, height: 100 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>glockLogo</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>taurusLogo</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>berettaLogo</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>sigSauerLogo</Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default logoCollage;