import { Typography } from '@material-ui/core';
import React from 'react';

export default function DescriptionText(props){

    return(
        <Typography>
            {props.name}
        </Typography>
    )
}