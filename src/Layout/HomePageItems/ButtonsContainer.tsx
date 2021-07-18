import { Button, Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            marginTop: 15,
            backgroundColor: "#a89090",
            paddingTop: 10,
            paddingBottom: 10,
        },
        playerButton: {
            borderRadius: 15,
            border: "1px solid #23932e",
            marginRight: 10,
            backgroundColor: "#e08121",
        },
        tournamentsButton: {
            borderRadius: 15,
            border: "1px solid #23932e",
            marginLeft: 10,
            backgroundColor: "#ab4dd1",
        }
    }))

export default function ButtonsContainer(){

    const history = useHistory();
    const classes = useStyles();
    
    const handlePlayersPushButton = () =>{
        history.push('/findplayers');
    }

    const handleTournamentsPushButton = () =>{
        history.push('/findtournaments');
    }
    return(
        <Container className={classes.container}>
            <Button onClick={handlePlayersPushButton} className={classes.playerButton}>
                Find Players in Your Area
            </Button>
            <Button onClick={handleTournamentsPushButton} className={classes.tournamentsButton}>
                Find Active Tournaments
            </Button>

        </Container>
    )
}