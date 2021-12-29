import { Container, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import DescriptionText from '../../Components/DescriptionText';
import FindPlayerCard from '../../Components/Cards/FindPlayerCard';

import FindPlayerFormData from '../../Data/FindPlayerFormData';
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


export default function RecentForms(){

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <DescriptionText name="Recent Form uploads:" />
            <Divider className={classes.dividerTop} />
            <Grid container direction="row" spacing={2}>
                {FindPlayerFormData.map(item => (
                    <Grid key={item.id} item xs={8} sm={6} md={4} lg={3}>
                        <FindPlayerCard item={item}/>
                    </Grid>
                ))}
            </Grid>
            <Divider className={classes.dividerBottom} />
        </Container>
    )
}