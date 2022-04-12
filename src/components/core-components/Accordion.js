import React from "react";
//MUI imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqAccordion = ({faq}) => {
  return (
    
        <Grid container direction='column' columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} textAlign="center">
                
                <Box margin='5rem'>
                    {faq.map(accordion => {
                    const {question, answer} = accordion;
                        return(
                            <Accordion key={question}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant='h5' align='left'>
                                        {question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='h6' align='left'>
                                        {answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })};
                </Box>
            </Grid>
        </Grid>
    
  );
}

export default FaqAccordion;