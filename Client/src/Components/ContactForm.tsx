import { Container, createStyles, Divider, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        contactForm: {
            position: "absolute",
            bottom: 0,
            textAlign: "center"
        }
    }))

const getCurrentYear = () =>{
    return new Date().getFullYear();
}
export default function ContactForm(){

    const classes = useStyles();

    return(
        <Container className={classes.contactForm}>
            <Divider />
            <Typography>
                ContactForm
            </Typography>
            <Typography>
                © PartnerFinderis {getCurrentYear()}
            </Typography>
        </Container>

    )
}