import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import CreatePostForm from '../Components/CreatePostForm';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        pageName:{
            textAlign: "center",
            marginBottom: 15
        }
    }))
export default function CreatePost(){

    const classes = useStyles();
    
    return(
        <PageContainer>
            <Typography className={classes.pageName}>
                Create a New Post Form
            </Typography>
            <CreatePostForm />
        </PageContainer>
    )
}