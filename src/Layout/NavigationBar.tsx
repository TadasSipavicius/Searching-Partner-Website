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
            marginTop: 5,
            marginLeft: 3,
            marginRight: 5,
            backgroundColor: "black",
            borderRadius: 10,
        },
        navlinks: {
            fontWeight: 'bold',
            margin: theme.spacing(1,2),
            color: "#353839d1",
            fontFamily: "Quintessential, cursive",
        },
        login: {
            minWidth: 100,
            marginLeft: 20,
            borderRadius: 50,
            fontWeight: "bold",
            fontFamily: 'Mitr, sans-serif',
            fontSize: 16,
            border: "2px solid #23932e",
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.35)',

        },
        register: {
            minWidth: 100,
            marginRight: 10,
            fontFamily: 'Mitr, sans-serif',
            fontWeight: "bold",
            fontSize: 16,
            borderRadius: 50,
            border: "2px solid #23932e",
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.35)',
            
        },
        linebetweenButtons: {
            border: "2px solid black",
            minHeight: 40,
            marginLeft: 5,
            marginRight: 5,
            backgroundColor: "black",
            borderRadius: 10,
        }

}));
export default function NavigationBar(){

    const classes = useStyles();
    return(
        <AppBar className={classes.appBar} elevation={4}>
            <Toolbar className={classes.toolbar}>
                <Link component={NavLink} className={classes.logoTitle} to='/'>
                    Partner 
                    <Typography className={classes.lineBetween} />
                    Finderis
                </Link>
                <Grid item xs />
                <Typography style={{ float: "right" }}>
                    {navigation.map((item: NavigationType) => (
                        <Link component={NavLink} to={item.to} className={classes.navlinks}>
                            {item.title}
                        </Link>
                    ))}
                </Typography>
                <Button className={classes.login}>Login</Button>
                <Typography className={classes.linebetweenButtons} />
                <Button className={classes.register}>Register</Button>
            </Toolbar>
        </AppBar>
    )
}
