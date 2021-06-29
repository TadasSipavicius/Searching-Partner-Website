import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import React from 'react';


function AuthButton(props) {

    const { loginWithRedirect } = useAuth0();
    return (
        <Button 
            className={props.className} 
            onClick={() => loginWithRedirect()}
            >
                {props.name}
        </Button> 
    
    );
}

export default AuthButton;