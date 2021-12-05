import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        contactForm: {
            position: "absolute",
            bottom: 0
        }
    }))
    
export default function ContactForm(){

    const classes = useStyles();

    return(
        <Container className={classes.contactForm}>
            <Typography>
                ContactForm
            </Typography>
        </Container>

    )
}