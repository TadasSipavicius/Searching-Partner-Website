import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        container: {
            minHeight: 250,
            border: "1px solid black",
            background: "#49a852;",
            textAlign: "center",
            borderRadius: 20,
        },
        playerButton: {
            textTransform: "none",
            maxWidth: 150,
            fontSize: 17,
           
        }
    }))

export default function TopNewsBar(){

    const classes = useStyles();
    
    return(
        <Container className={classes.container}>
            SLIDING PICTURES
        </Container>
    )
}