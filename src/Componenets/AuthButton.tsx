import { Button } from '@material-ui/core';
import React from 'react';


function AuthButton(props) {
    return (
        <Button className={props.className}>{props.name}</Button>
    );
}

export default AuthButton;