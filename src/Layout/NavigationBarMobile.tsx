import { AppBar, createStyles, Drawer, List, ListItemText, makeStyles, Theme, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { navigation, NavigationType } from '../Navigation';
import { ListItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: theme.palette.secondary.main,
        },
        toolbar: {
            justifyContent: "space-between",
        },
        logoTitle: {
            display: "flex",
            fontFamily: 'Lobster, sans-serif',
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            fontSize: 26,
            letterSpacing: 2.5,
            textDecoration: "none",
        },
        navlist: {
            padding: 0,
        }
    })   
)
export default function NavigationBarMobile(){

    const classes = useStyles();
    // Pasiskaityti ir pasirasyti ka sitas useHistory() daro
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    const handleNavListItemClick = (pathTo: string) => {
        // Issiaiskinti ka sitas konkreciai daro
        history.push(pathTo);
        setIsOpen(false);
    };

    const phoneNavLink = () => (
        <List className={classes.navlist}>
            {navigation.map((item: NavigationType) =>(
                <>
                {/* Pasiskaityti apie list ir listitemus ir visa kita */}
                <ListItem
                    button
                    key={item.title}
                    onClick={() => handleNavListItemClick(item.to)}
                    >
                        <ListItemText primary={item.title} />
                        
                </ListItem>
                {item.title !== "Blog" ? <Divider /> : null }
                </>
            ))}
        </List>
    )
    return(
        <AppBar className={classes.appBar} position="sticky">
            <Toolbar className={classes.toolbar}>
                <Link to='/' className={classes.logoTitle}>
                    Partner_Finderis
                </Link>
                <IconButton edge="end" onClick={handleOpen}>
                    <MenuIcon />
                </IconButton> 
            </Toolbar>
            {/* Pasiskaityti apie drawer */}
            <Drawer anchor="top" open={isOpen} onClose={handleOpen}>
                {phoneNavLink()}
            </Drawer>
        </AppBar>
    )
}