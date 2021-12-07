import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import RecentForms from '../Layout/HomePageItems/RecentForms';
export default function FindPlayers() {

    const history = useHistory();
    const { isAuthenticated } = useAuth0();
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
                FindPlayers
            </Typography>
            <Button onClick={handleAddPost}>
                Add Announcement
            </Button>
            <RecentForms />
            <ContactForm />
        </PageContainer>
    )
}