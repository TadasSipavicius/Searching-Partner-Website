import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

function AuthRegisterButton(props) {

    const { loginWithRedirect } = useAuth0();

    return(

        <Button 
        className={props.className} 
        onClick={() => loginWithRedirect({
            screen_hint: "signup",
        })}
        >
            {props.name}
        </Button> 

    )
}

export default AuthRegisterButton;