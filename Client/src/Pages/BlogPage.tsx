import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import { BlogType } from '../BlogType';

interface RouteParams {
    id: string
}    

export default function BlogPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)
    const { user } = useAuth0();
    const [blogData, setBlogData] = useState<BlogType[]>([]);
    const adminID = process.env.REACT_APP_ADMINISTR_ID;

    // !!!
    // Reikia padaryt, kad paimtu pagal ID, o ne visus
    // !!!
    useEffect(() =>{
        Axios.get("http://localhost:3001/blog/get").then((response) =>{
            setBlogData(response.data);
        });
    }, []);

    const deleteBlog = (blogID) =>{
        Axios.delete(`http://localhost:3001/blog/delete/${blogID}`);
    }

    return(
        <PageContainer>
            {blogData.filter(data => data.id === id).map((item: BlogType) =>(
                <Container key={item.id}>
                    <Typography>{item.blog_title}</Typography>
                    <Typography>{item.blog_text}</Typography>
                    {((user?.sub === item.user_id) || (adminID === user?.sub)) ? (
                        <>
                        <Button onClick={() => deleteBlog(item.id)}>Delete</Button>
                        <Button>Edit</Button>
                        </>
                    ) : null}
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}
