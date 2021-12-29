import React from 'react';
import { Container, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

import TournamentData from '../Data/TournamentData';

interface RouteParams {
    id: string
}    

export default function TournamentPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)

    return(
        <PageContainer>
            {TournamentData.filter(data => data.id === id).map(item =>(
                <Container key={item.id}>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}
