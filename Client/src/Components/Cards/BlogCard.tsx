import { Card, CardActionArea, CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        card: {
            maxWidth: 300,
        }
    }))


export default function BlogCard(item){

    const classes = useStyles();
    const history = useHistory();

    const handleClick = () =>{
        history.push(`/blog/${item.item.id}`)
    }
    return(
        <Card className={classes.card}>
            <CardActionArea onClick={handleClick}>
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