import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

import FindPlayerFormData from '../Data/FindPlayerFormData'

interface RouteParams {
    id: string
}    

export default function FindPlayerPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)
    const adminID = process.env.REACT_APP_ADMINISTR_ID;
    const { user } = useAuth0();

    return(
        <PageContainer>
            {FindPlayerFormData.filter(data => data.id === id).map(item =>(
                <Container key={item.id}>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                    {adminID === user?.sub ? (
                        <>
                        <Button>Delete</Button>
                        <Button>Edit</Button>
                        </>
                    ) : null}
                    
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}