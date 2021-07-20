import { Container, createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import ButtonsContainer from '../Layout/HomePageItems/ButtonsContainer';
import ButtonsDescription from '../Layout/HomePageItems/ButtonsDescription';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        main: {
            backgroundColor: "#9baaa5",
            borderRadius: 40,
            marginTop: 10,
            paddingTop: 15,
            minHeight: "100vh"
        },
        divider: {
            marginTop: 18,
        }
    }))

function Home() {

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <ButtonsDescription />
            <ButtonsContainer />
            <Divider className={classes.divider}/>
        </Container>
    )
}

export default Home;