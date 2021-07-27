import { Button, Container, createStyles, Fade, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';


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


export default function FindPlayers() {

    const classes = useStyles();
    const history = useHistory();

    const handleAddPost = () =>{
        history.push('./createpost');
    }

    return(
        <Fade in timeout={800}>
            <Container className={classes.main}>
                <Typography>
                    FindPlayers
                </Typography>
                <Button onClick={handleAddPost}>
                    Add Announcement
                </Button>
            </Container>
        </Fade>
    )
}