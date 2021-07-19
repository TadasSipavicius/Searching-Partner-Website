import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import ButtonsContainer from '../Layout/HomePageItems/ButtonsContainer';
import ButtonsDescription from '../Layout/HomePageItems/ButtonsDescription';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        main: {
            backgroundColor: "#c2d3cf",
            borderRadius: 40,
            marginTop: 10,
            paddingTop: 15,
            minHeight: "100vh"
        }
    }))

function Home() {

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <ButtonsDescription />
            <ButtonsContainer />
        </Container>
    )
}

export default Home;