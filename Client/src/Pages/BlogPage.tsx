import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import Axios from 'axios';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';


interface RouteParams {
    id: string
}    

export default function BlogPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)
    const [blogData, setBlogData] = useState<any[]>([]);
    
    useEffect(() =>{
        Axios.get("http://localhost:3001/blog/get").then((response) =>{
            setBlogData(response.data);
        });
    }, []);

    return(
        <PageContainer>
            {blogData.filter(data => data.id === id).map(item =>(
                <Container key={item.id}>
                    <Typography>{item.blog_title}</Typography>
                    <Typography>{item.blog_text}</Typography>
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}
