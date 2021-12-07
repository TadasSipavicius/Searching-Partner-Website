import { Container, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import DescriptionText from '../../Components/DescriptionText';
import TournamentCard from '../../Components/Cards/TournamentCard';

import TournamentData from '../../Data/TournamentData';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        main: {
           color: "white",
           marginTop: 15,
           padding: 0,
        },
        dividerTop: {
            marginBottom: 10
        },
        dividerBottom: {
            marginTop: 10
        }
    }))

export default function RecentTournaments(){

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <DescriptionText name="Recent Tournaments:" />
            <Divider className={classes.dividerTop} />
            <Grid container direction="row">
            {TournamentData.map(item =>(
                <Grid item xs={8} sm={6} md={4} lg={3}>
                    <TournamentCard key={item.id} item={item}/>
                </Grid> 
            ))}
            </Grid>
            <Divider className={classes.dividerBottom} />
        </Container>
    )
}