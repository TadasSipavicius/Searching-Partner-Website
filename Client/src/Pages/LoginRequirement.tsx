import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import AuthLoginButton from '../Components/Auth0/AuthLoginButton';
import ContactForm from '../Components/ContactForm';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        container: {
            textAlign: "center"
        },
        playerButton: {
            border: "1px solid #6e7a78",
            backgroundColor: "#7fb37d",
            fontFamily: "Roboto, sans-serif",
            color: "white",
            textTransform: "none",
            borderRadius: 6,
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            fontSize: 15,
            minWidth: 160,
            justifyContent: "center",
            margin: "0 auto",
            display: "flex",
        }
    }))
    
export default function LoginRequirements(){
    const classes = useStyles();
    return(
        <PageContainer>
            <Typography className={classes.container}>
                If you want to create a post, then you must Log in 
            </Typography>
            <Typography className={classes.container}>
                Click Button Below
            </Typography>
            <AuthLoginButton name="Login" className={classes.playerButton}/>
            <ContactForm />
        </PageContainer>
    )
}