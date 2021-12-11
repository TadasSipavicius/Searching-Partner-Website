import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';

import RecentTournaments from '../Layout/HomePageItems/RecentTournaments';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
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
            justifyContent: "center",
        }
    }))


export default function FindTournaments() {

    const { user } = useAuth0();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;
    const history = useHistory();
    const classes = useStyles();
    
    const handleAddTournament = () =>{
        history.push('./createtournament')
    }
    return(
        <PageContainer>
            <Typography>
                FindTournaments
            </Typography>
            {user?.sub === adminID ? (
                <Button onClick={handleAddTournament} className={classes.playerButton}>
                    Add Tournament
                </Button>
            ) : null}
            <RecentTournaments />
            <ContactForm />
        </PageContainer>
    )
}