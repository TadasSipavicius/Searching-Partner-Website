import React from 'react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import ButtonsContainer from '../Layout/HomePageItems/ButtonsContainer';
import ButtonsDescription from '../Layout/HomePageItems/ButtonsDescription';
import RecentNews from '../Layout/HomePageItems/RecentNews';
import RecentForms from '../Layout/HomePageItems/RecentForms';
import RecentTournaments from '../Layout/HomePageItems/RecentTournaments';

export default function Home() {

    
    return(
        <PageContainer>
            <ButtonsDescription />
            <ButtonsContainer />
            <RecentNews />
            <RecentTournaments />
            <RecentForms />
            <ContactForm />
        </PageContainer>

    )
}