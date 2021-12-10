import { Container, createStyles, Fade, makeStyles, Theme } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        main: {
            position: "relative",
            backgroundColor: "#9baaa5",
            borderRadius: 40,
            marginTop: 10,
            paddingTop: 15,
            minHeight: "150vh",

            [theme.breakpoints.down('md')]: {
                minHeight: "200vh",
            },
            [theme.breakpoints.down('sm')]: {
                minHeight: "280vh",
            },
        },
    }))

export default function PageContainer({children}){
    
    const classes = useStyles();

    return(
        <Fade in timeout={800}>
            <Container className={classes.main}>
                {children}
            </Container>
        </Fade>
    )
}