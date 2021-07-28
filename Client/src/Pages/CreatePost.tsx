import { Typography } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import CreatePostForm from '../Components/CreatePostForm';
export default function CreatePost(){

    
    return(
        <PageContainer>
            <Typography>
                Create a New Post
            </Typography>
            <CreatePostForm />
        </PageContainer>
    )
}