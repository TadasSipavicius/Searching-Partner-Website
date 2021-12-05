import { createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import ButtonsContainer from '../Layout/HomePageItems/ButtonsContainer';
import ButtonsDescription from '../Layout/HomePageItems/ButtonsDescription';
import RecentNews from '../Layout/HomePageItems/RecentNews';
import RecentForms from '../Layout/HomePageItems/RecentForms';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        divider: {
            marginTop: 18
        }
    }))

export default function Home() {

    const classes = useStyles();

    return(
        <PageContainer>
            <ButtonsDescription />
            <ButtonsContainer />
            <Divider className={classes.divider}/>
            <RecentNews />
            <Divider className={classes.divider}/>
            <RecentForms />
            <Divider className={classes.divider}/>
            <ContactForm />
        </PageContainer>

    )
}