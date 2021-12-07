import { Container, createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import DescriptionText from '../../Components/DescriptionText';

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
            marginTop: 20
        }
    }))

export default function RecentTournaments(){

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <DescriptionText name="Recent Tournaments:" />
            <Divider className={classes.dividerTop} />
            <Divider className={classes.dividerBottom} />
        </Container>
    )
}