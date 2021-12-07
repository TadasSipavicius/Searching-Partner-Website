import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

import RecentNews from '../Layout/HomePageItems/RecentNews';
export default function Blog() {

    const { user } = useAuth0();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;
    const history = useHistory();
    
    const handleAddBlog = () =>{
        history.push('./createblog')
    }
    return(
        <PageContainer>
            <Typography>
                BLOG
            </Typography>

            {user?.sub === adminID  ?
            <Button onClick={handleAddBlog}>
                Add Blog
            </Button> : 
            null}
            <RecentNews />
            <ContactForm />
        </PageContainer>

    )
}
