import { Typography } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
export default function Blog() {

    return(
        <PageContainer>
            <Typography>
                BLOG
            </Typography>
            <ContactForm />
        </PageContainer>

    )
}
