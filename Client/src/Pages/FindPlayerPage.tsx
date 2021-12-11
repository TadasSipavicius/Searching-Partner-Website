import React from 'react';
import { Container, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

import FindPlayerFormData from '../Data/FindPlayerFormData'

interface RouteParams {
    id: string
}    

export default function FindPlayerPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)

    return(
        <PageContainer>
            {FindPlayerFormData.filter(data => data.id === id).map(item =>(
                <Container>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}