import { Card, CardActionArea, CardContent, CardMedia, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

import TournamentPhoto from '../../Assets/Images/tennis_tournament.jpg';
const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        card: {
            maxWidth: 300,
            minHeight: 250
        }
    }))

export default function TournamentCard(item){

    const classes = useStyles();
    const history = useHistory();

    const handleClick = () =>{
        history.push(`/tournament/${item.item.id}`)
    }

    return(
        <Card className={classes.card}>
            <CardActionArea onClick={handleClick}>
            <CardMedia
                component="img"
                height="140"    
                image={TournamentPhoto}
                alt="Tennis image"
            />
                <CardContent>
                    <Typography>
                        {item.item.title}
                    </Typography>
                    <Typography>
                        {item.item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}