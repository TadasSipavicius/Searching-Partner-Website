import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import DescriptionText from '../../Components/DescriptionText';


const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        main: {
           color: "white",
           marginTop: 15,
           padding: 0,
        },
    }))


export default function RecentForms(){

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <DescriptionText name="Recent Form uploads:" />
        </Container>
    )
}