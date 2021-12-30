import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

import TournamentData from '../Data/TournamentData';

interface RouteParams {
    id: string
}    

export default function TournamentPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)
    const { user } = useAuth0();
    
    return(
        <PageContainer>
            {TournamentData.filter(data => data.id === id).map(item =>(
                <Container key={item.id}>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}
