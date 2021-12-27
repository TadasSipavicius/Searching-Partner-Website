import React from 'react';

import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

import RecentNews from '../Layout/HomePageItems/RecentNews';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        playerButton: {
            border: "1px solid #6e7a78",
            marginRight: 10,
            backgroundColor: "#7fb37d",
            fontFamily: "Roboto, sans-serif",
            color: "white",
            textTransform: "none",
            borderRadius: 6,
            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            fontSize: 15,
            minWidth: 160,
            justifyContent: "center",
        }
    }))
    
export default function Blog() {

    const classes = useStyles();
    const { user } = useAuth0();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;
    const history = useHistory();
    
    const handleAddBlog = () =>{
        history.push('./createblog')
    }
    return(
        <PageContainer>


            {user?.sub === adminID  ?
            (
                <>
                    <Typography>
                        Add new blog:
                    </Typography>
                    <Button onClick={handleAddBlog} className={classes.playerButton}>
                         Add Blog
                    </Button>
                </>
            ) : 
            null}
            <RecentNews />
            <ContactForm />
        </PageContainer>

    )
}
