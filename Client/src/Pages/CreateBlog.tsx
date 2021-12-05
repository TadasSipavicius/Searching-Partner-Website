import React from 'react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import AddBlogForm from '../Components/AddBlogForm'
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        pageName:{
            textAlign: "center",
            marginBottom: 15
        }
    }))
    
export default function PageNotFound() {

    const classes = useStyles();
    
    return(
        <PageContainer>
            <Typography className={classes.pageName}>
                Create a New Blog
            </Typography>
            <AddBlogForm />
            <ContactForm />
        </PageContainer>
    )
}
