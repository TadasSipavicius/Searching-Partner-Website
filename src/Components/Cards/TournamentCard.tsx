import { CardActionArea, CardContent, CardMedia, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import Card from '@mui/material/Card';

import TournamentPhoto from '../../Assets/Images/tennis_tournament.jpg';
const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        card: {
            maxWidth: 300,
            minHeight: 250
        },
        description: {
            fontSize: 14
        },
        title:{
            minHeight: 70
        }
    }))

export default function TournamentCard(item){

    const classes = useStyles();
    const history = useHistory();

    const handleClick = () =>{
        history.push(`/tournament/${item.item.id}`)
    }

    return(
        <Card sx={{ maxHeight: 405 }} className={classes.card}>
            <CardActionArea onClick={handleClick}>
            <CardMedia
                component="img"
                height="140"    
                image={TournamentPhoto}
                alt="Tennis image"
            />
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="div">
                        {item.item.tournament_title}
                    </Typography>
                    <Typography className={classes.description}>
                        {item.item.tournament_text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}