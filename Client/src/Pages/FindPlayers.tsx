import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

import PageContainer from '../Components/PageContainer';

export default function FindPlayers() {

    const history = useHistory();

    const handleAddPost = () =>{
        history.push('./createpost');
    }

    return(
        <PageContainer>          
            <Typography>
                FindPlayers
            </Typography>
            <Button onClick={handleAddPost}>
                Add Announcement
            </Button>
        </PageContainer>
    )
}