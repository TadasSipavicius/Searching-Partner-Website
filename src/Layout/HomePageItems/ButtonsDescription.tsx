import { Container, createStyles, makeStyles, Typography, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        main: {
            color: "white",
            textAlign: "center",    
        },
        text1: {
            fontSize: 36,
            [theme.breakpoints.down('xs')]: {
                fontSize: 24,
                letterSpacing: 1,
                fontFamily: "Montserrat, sans-serif",
            },
            fontFamily: "Poppins, sans-serif",
        },
        text2: {
            fontSize: 26,
            [theme.breakpoints.down('xs')]: {
                fontSize: 18,
                fontFamily: "Open Sans, sans-serif",
            },
            fontFamily: "Poppins', sans-serif",
            letterSpacing: 1,
            fontWeight: "bold",
            marginTop: 30,
        }
    }))


export default function ButtonsDescription(){

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <Typography className={classes.text1}>
                Find Players and ongoing Tournaments in your living area
            </Typography>
            <Typography className={classes.text2}>
                Fill the form and find a Tennis Partner
            </Typography>
        </Container>
    )
}