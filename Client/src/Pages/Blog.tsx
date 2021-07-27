import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Fade } from '@material-ui/core';
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

export default function Blog() {

    const classes = useStyles();

    return(
        <Fade in timeout={800}>
            <Container className={classes.main}>
                <Typography>
                    BLOG
                </Typography>
            </Container>
        </Fade>
    )
}
