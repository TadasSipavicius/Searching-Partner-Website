import { Container, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import DescriptionText from '../../Components/DescriptionText';
import BlogCard from '../../Components/Cards/BlogCard';

import BlogData from '../../Data/BlogData';
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


export default function RecentNews(){

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <DescriptionText name="Recent news:" />
            <Divider className={classes.dividerTop} />
            <Grid container direction="row">
            {BlogData.map(item =>(
                <Grid item xs={8} sm={6} md={4} lg={3}>
                    <BlogCard key={item.id} item={item}/>
                </Grid> 
            ))}
            </Grid>
            <Divider className={classes.dividerBottom} />
        </Container>
    )
}