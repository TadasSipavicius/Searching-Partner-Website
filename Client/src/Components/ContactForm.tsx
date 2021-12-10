import { Container, createStyles, Divider, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        contactForm: {
            textAlign: "center"
        },
        links:{
            textDecoration: "none",
            color: "#272727",
            "&:hover": {
                color: theme.palette.primary.main
            }
        },
        year:{
            marginBottom: 10,
            color: "black"
        }
    }))

const newLocal = ({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
});
const Item = styled(Paper)(newLocal);

const getCurrentYear = () =>{
    return new Date().getFullYear();
}

export default function ContactForm(){

    const classes = useStyles();

    return(
        <Container className={classes.contactForm}>
            <Divider />
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                mt={2}
                mb={1.5}
            >
                <Item>
                    <Link to='/' className={classes.links}>
                        Home
                    </Link>
                </Item>
                <Item>
                    <Link to='/findplayers' className={classes.links}>
                        Find Players
                    </Link>
                </Item>
                <Item>
                    <Link to='/findtournaments' className={classes.links}>
                        Tournaments
                    </Link>
                </Item>
                <Item>
                    <Link to='/blog' className={classes.links}>
                        Recent News
                    </Link> 
                </Item>
            </Stack>
            <Typography className={classes.year}>
                © PartnerFinderis {getCurrentYear()}
            </Typography>
        </Container>

    )
}