import { useAuth0 } from '@auth0/auth0-react';
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import RecentForms from '../Layout/HomePageItems/RecentForms';

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
    
export default function FindPlayers() {

    const history = useHistory();
    const { isAuthenticated } = useAuth0();
    const classes = useStyles();

    const handleAddPost = () =>{
        if(isAuthenticated){
            history.push('./createpost');
        }
        else{
            history.push('./loginrequirement')
        } 
    }

    return(
        <PageContainer>          
            <Typography>
                Add Form:
            </Typography>
            <Button onClick={handleAddPost} className={classes.playerButton}>
                Add Announcement
            </Button>
            <RecentForms />
            <ContactForm />
        </PageContainer>
    )
}