import React from 'react';
import { Container, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

import BlogData from '../Data/BlogData'

interface RouteParams {
    id: string
}    

export default function BlogPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)

    return(
        <PageContainer>
            {BlogData.filter(data => data.id === id).map(item =>(
                <Container  >
                    <Typography>{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}
