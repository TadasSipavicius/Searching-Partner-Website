import { Container, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
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
    const [blogData, setBlogData] = useState<any[]>([]);
    
    useEffect(() =>{
        Axios.get("http://localhost:3001/blog/get").then((response) =>{
            setBlogData(response.data);
        });
    }, []);
    
    return(
        <Container className={classes.main}>
            <DescriptionText name="Recent news:" />
            <Divider className={classes.dividerTop} />
            <Grid container direction="row" spacing={2}>
            {blogData.map(item =>(
                <Grid item xs={8} sm={6} md={4} lg={3} >
                    <BlogCard key={item.id} item={item}/>
                </Grid> 
            ))}
            </Grid>
            <Divider className={classes.dividerBottom} />
        </Container>
    )
}