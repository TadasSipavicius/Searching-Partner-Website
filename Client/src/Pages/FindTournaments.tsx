import { Container, createStyles, Fade, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

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

export default function FindTournaments() {

    const classes = useStyles();

    return(
        <Fade in timeout={800}>
            <Container className={classes.main}>
                <Typography>
                    FindTournaments
                </Typography>
            </Container>
        </Fade>
    )
}