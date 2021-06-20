import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: "#ECECEC",
        },
        logoTitle: {
            display: "flex",
            fontFamily: 'Lobster, sans-serif',
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            fontSize: 28,
            letterSpacing: 2.5,
        },
        lineBetween: {
            border: "2px solid black",
            maxHeight: 25,
            marginTop: 7,
            marginLeft: 3,
            marginRight: 5,
            backgroundColor: "black",
            borderRadius: 10,
        },

}));
export default function NavigationBar(){

    const classes = useStyles();
    return(
        <AppBar className={classes.appBar} elevation={4}>
            <Toolbar>
                <Typography className={classes.logoTitle}>
                    Partner 
                    <Typography className={classes.lineBetween} />
                    Finderis
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
