import React, { useEffect, useState } from 'react';
import { Container, Dialog, DialogActions, DialogTitle, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import { BlogType } from '../BlogType';

interface RouteParams {
    id: string
}    

export default function BlogPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id);
    const history = useHistory();
    const { user } = useAuth0();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;

    const [blogData, setBlogData] = useState<BlogType[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL!;
    
    // !!!
    // Reikia padaryt, kad paimtu pagal ID, o ne visus
    // !!!
    useEffect(() =>{
        Axios.get(`${API_URL}/blog/get`).then((response) =>{
            setBlogData(response.data);
        });
    }, [API_URL]);

    const handleOnCloseDialog = () =>{
        setIsOpen(false);
    }

    const redirectToHomePage = () =>{
        history.push('/');
    }

    const deleteBlog = async (blogID) =>{
        await Axios.delete(`${API_URL}/blog/delete/${blogID}`);
        setIsOpen(true);
    }

    return(
        <PageContainer>
            {blogData.filter(data => data.id === id).map((item: BlogType) =>(
                <Container key={item.id}>
                    <Typography variant='h3'>{item.blog_title}</Typography>
                    <Typography >{item.blog_text}</Typography>
                    {((user?.sub === item.user_id) || (adminID === user?.sub)) ? (
                        <>
                        <Button variant="contained" color="error" onClick={() => deleteBlog(item.id)}>Delete</Button>
                        <Button variant="contained" color="success">Edit</Button>
                        </>
                    ) : null}
                    <Dialog 
                        open={isOpen}
                        onClose={handleOnCloseDialog}
                    >
                        <DialogTitle>
                            Delete is Completed. Get back to Home page?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={redirectToHomePage}>Yes</Button>
                            <Button onClick={handleOnCloseDialog}>No</Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}
