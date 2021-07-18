import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import TopNewsBar from '../Layout/HomePageItems/TopNewsBar';
import ButtonsContainer from '../Layout/HomePageItems/ButtonsContainer';
import ButtonsDescription from '../Layout/HomePageItems/ButtonsDescription';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        main: {
            paddingTop: 15,
            minHeight: "100vh"
        }
    }))

function Home() {

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <TopNewsBar />
            <ButtonsDescription />
            <ButtonsContainer />
        </Container>
    )
}

export default Home;