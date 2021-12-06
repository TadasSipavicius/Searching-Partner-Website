import { Button, Typography } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';

export default function FindTournaments() {

    const { user } = useAuth0();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;
    const history = useHistory();
    
    const handleAddTournament = () =>{
        history.push('./createtournament')
    }
    return(
        <PageContainer>
            <Typography>
                FindTournaments
            </Typography>
            {user?.sub === adminID ? (
                <Button onClick={handleAddTournament}>
                    Add Tournament
                </Button>
            ) : null}
            <ContactForm />
        </PageContainer>
    )
}