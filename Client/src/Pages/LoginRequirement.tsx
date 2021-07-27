import { Typography } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import AuthLoginButton from '../Components/Auth0/AuthLoginButton';

export default function LoginRequirements(){

    return(
        <PageContainer>
            <Typography>
                If you want to create a post, then you must Log in 
            </Typography>
            <Typography>
                Click Button Below
            </Typography>
            <AuthLoginButton name="Login"/>
        </PageContainer>
    )
}