import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
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
    }))


export default function RecentNews(){

    const classes = useStyles();

    return(
        <Container className={classes.main}>
            <DescriptionText name="Recent news:" />
            {BlogData.map(item =>(
                <BlogCard key={item.id} item={item}/>
            ))}
            
        </Container>
    )
}