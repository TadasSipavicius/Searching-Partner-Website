import React from 'react';
import JSONPretty from 'react-json-pretty';

import { useAuth0 } from '@auth0/auth0-react';
import { Container, createStyles, Fade, makeStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        main: {
            backgroundColor: "#9baaa5",
            borderRadius: 40,
            marginTop: 10,
            paddingTop: 15,
            minHeight: "100vh"
        },
        divider: {
            marginTop: 18,
        }
    }))

export default function Profile(){
    
    const { user } = useAuth0();
    const classes = useStyles();
    return(
        <Fade in timeout={800}>
            <Container className={classes.main}>
                <img src={user?.picture} alt={user?.name}/>
                <JSONPretty id="json-pretty" data={JSON.stringify(user, null,2)}></JSONPretty>
                
            </Container>
        </Fade>
    )
}
