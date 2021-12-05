import { Typography } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

export default function PageNotFound() {

    return(
        <PageContainer>
            <Typography>
                Page not found
            </Typography>
            <ContactForm />
        </PageContainer>
    )
}
