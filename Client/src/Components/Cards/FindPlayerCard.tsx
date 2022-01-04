import { Card, CardActionArea, CardContent, CardMedia, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

import TennisPartnerImage from '../../Assets/Images/tennis_partner.jpg';
const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        card: {
            maxWidth: 300,
            minHeight: 320,
        },
        description: {
            fontSize: 14
        }
    }))

export default function FindPlayerCard(item){

    const classes = useStyles();
    const history = useHistory();

    const handleClick = () =>{
        history.push(`/findplayer/${item.item.id}`)
    }
    return(
        <Card className={classes.card}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={TennisPartnerImage}
                    alt="Tennis image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {"Name: " +item.item.name}
                    </Typography>
                    <Typography className={classes.description}>
                        {"NTRP: " +item.item.NTRP}
                    </Typography>
                    <Typography className={classes.description}>
                        {"City: " + item.item.city}
                    </Typography>
                    <Typography className={classes.description}>
                        {"Time: " + item.item.time}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}