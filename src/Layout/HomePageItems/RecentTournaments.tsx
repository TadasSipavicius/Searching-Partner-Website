import { Container, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import DescriptionText from '../../Components/DescriptionText';
import TournamentCard from '../../Components/Cards/TournamentCard';

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
    const [tournamentData, setTournamentData] = useState<any[]>([]);
    const API_URL = process.env.REACT_APP_API_URL!;

    useEffect(() =>{
        Axios.get(`https://partnerfinderis-api.herokuapp.com/tournament/get`).then((response) =>{
            setTournamentData(response.data);
        });
    }, [API_URL]);

    return(
        <Container className={classes.main}>
            <DescriptionText name="Recent Tournaments:" />
            <Divider className={classes.dividerTop} />
            <Grid container direction="row" spacing={2}>
            {tournamentData.map(item =>(
                <Grid key={item.id} item xs={8} sm={6} md={4} lg={3}>
                    <TournamentCard item={item}/>
                </Grid> 
            ))}
            </Grid>
            <Divider className={classes.dividerBottom} />
        </Container>
    )
}