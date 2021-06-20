import { AppBar, Button, Grid, Link } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

import { navigation, NavigationType } from '../Navigation';
import React from 'react';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: "#ECECEC",
            justifyContent: "space-between",
        },
        toolbar: {
            width: '80%',
            margin: 'auto',
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
        navlinks: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            margin: theme.spacing(1,2),
            color: "black",
            fontFamily: "Quintessential, cursive",
        }

}));
export default function NavigationBar(){

    const classes = useStyles();
    return(
        <AppBar className={classes.appBar} elevation={4}>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.logoTitle}>
                    Partner 
                    <Typography className={classes.lineBetween} />
                    Finderis
                </Typography>
                <Grid item xs />
                <Typography style={{ float: "right" }}>
                    {navigation.map((item: NavigationType) => (
                        <Link component={NavLink} to={item.to} className={classes.navlinks}>
                            {item.title}
                        </Link>
                    ))}
                </Typography>
                <Button>Login</Button>
                <Button>Register</Button>
            </Toolbar>
        </AppBar>
    )
}
