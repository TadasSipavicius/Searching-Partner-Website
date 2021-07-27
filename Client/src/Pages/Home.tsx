import { Container, createStyles, Divider, Fade, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import ButtonsContainer from '../Layout/HomePageItems/ButtonsContainer';
import ButtonsDescription from '../Layout/HomePageItems/ButtonsDescription';
import RecentNews from '../Layout/HomePageItems/RecentNews';
import RecentForms from '../Layout/HomePageItems/RecentForms';


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

export default function Home() {

    const classes = useStyles();

    return(
        <Fade in timeout={800}>
            <Container className={classes.main}>
                <ButtonsDescription />
                <ButtonsContainer />
                <Divider className={classes.divider}/>
                <RecentNews />
                <Divider className={classes.divider}/>
                <RecentForms />
                <Divider className={classes.divider}/>
            </Container>
        </Fade>

    )
}