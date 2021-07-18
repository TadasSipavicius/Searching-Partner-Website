import { Theme } from '@material-ui/core';
import { Container, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        main: {
            textAlign: "center",
        }
    }))


export default function ButtonsDescription(){

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | 
            BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | BUTTONS DESCRIPTION | 
            
        </Container>
    )
}