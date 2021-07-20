import { Button, Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import useMobile from '../../useMobile';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down('xs')]: {
                maxWidth: 400,
            },
            maxWidth: 520,
            marginTop: 15,
            backgroundColor: "#728682",
            paddingTop: 10,
            paddingBottom: 10,
            border: "1px solid #6e7a78",
            boxShadow: "rgba(0, 0, 0, 0.94) 0px 1px 6px",
            borderRadius: 6,
        },
        playerButton: {
            border: "1px solid #6e7a78",
            marginRight: 10,
            backgroundColor: "#7fb37d",
            fontFamily: "Roboto, sans-serif",
            color: "white",
            textTransform: "none",
            borderRadius: 6,
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            fontSize: 15,
            minWidth: 160,
            justifyContent: "start",
        },
        tournamentsButton: {
            border: "1px solid #6e7a78",
            marginLeft: 10,
            backgroundColor: "#7fb37d",
            fontFamily: "Roboto, sans-serif",
            color: "white",
            textTransform: "none",
            borderRadius: 6,
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            fontSize: 15,
            minWidth: 160,
        },
        icon1: {
            marginRight: 6,
        },
        icon2: {
            marginRight: 5,
        },
    }))

export default function ButtonsContainer(){

    const history = useHistory();
    const classes = useStyles();
    const isMobile = useMobile();
    
    const handlePlayersPushButton = () =>{
        history.push('/findplayers');
    }

    const handleTournamentsPushButton = () =>{
        history.push('/findtournaments');
    }
    return(
        <Container className={classes.container}>
            {isMobile ?
                <>
                    <Button onClick={handlePlayersPushButton} className={classes.playerButton}>
                        <SportsTennisIcon className={classes.icon1} />
                        Find Players
                    </Button> 
                    <Button onClick={handleTournamentsPushButton} className={classes.tournamentsButton}>
                        <LocationSearchingIcon className={classes.icon2}/>
                        Find Tournaments
                    </Button>
                </>
             :
                <>
                    <Button onClick={handlePlayersPushButton} className={classes.playerButton}>
                        Find Players in Your Area
                    </Button>
                    <Button onClick={handleTournamentsPushButton} className={classes.tournamentsButton}>
                        Find Active Tournaments
                    </Button>
                </>
            }
        </Container>
    )
}