import { Box, Button, Container, createStyles, Divider, Grid, InputLabel, Link, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        theLabel: {
            marginBottom: 6,
            textAlign: "left",
            maxWidth: 350,
            margin: "0 auto",
            [theme.breakpoints.down('md')]: {
                minWidth: 600,
                marginTop: 25,
            },
            [theme.breakpoints.down('sm')]: {
                minWidth: 400,
            },
        },
        formField: {
            minWidth: 350,
            [theme.breakpoints.down('md')]: {
                minWidth: 600,
            },
            [theme.breakpoints.down('sm')]: {
                minWidth: 400,
            },
        },
        descbAndContactForm: {
            marginTop: 5,
            minWidth: 750,
            [theme.breakpoints.down('md')]: {
                minWidth: 600,
            },
            [theme.breakpoints.down('sm')]: {
                minWidth: 400,
            },
        },
        descbAndContactLabel: {
            textAlign: "left",
            margin: "0 auto",
            maxWidth: 750,
            [theme.breakpoints.down('md')]: {
                maxWidth: 600,
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: 400,
            },
        },
        submitbutton: {
            marginTop: 15,
            marginBottom: 45,
            borderRadius: 50,
            border: `2px solid ${theme.palette.primary.main}`,
            backgroundColor: "#cacaca"
        },
        theForm: {
            textAlign: "center",
        },
        gridContainer: {
            marginTop: 35,
            [theme.breakpoints.down('md')]: {
                marginTop: 0
            },
        },
        divider: {
            marginTop: 20,
            width: "75%",
            margin: "0 auto",
        }
    }))

export default function CreatePostForm(){

    const classes = useStyles();
    
    return(
        <Container className={classes.theForm}>
            <form>
                <Grid xs={12} container justify="center" item>
                    <Grid xs={12} lg={4} item>
                        <InputLabel className={classes.theLabel} >
                            Write your Name or Nickname:
                        </InputLabel>
                        <TextField className={classes.formField} label="Name" variant="outlined" required/>
                    </Grid>
                    <Grid xs={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            Write your Age:
                        </InputLabel>
                        <TextField className={classes.formField} label="Your Age" variant="outlined"/>
                    </Grid>   
                </Grid>

                <Grid  xs={12} container justify="center" className={classes.gridContainer} item>
                    <Grid sm={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            Enter your Gender:
                        </InputLabel>
                        <TextField 
                        className={classes.formField}
                        label="Gender"
                        variant="outlined"
                        required
                        />
                    </Grid> 
                    <Grid sm={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            <Link href="https://tenisonamai.lt/teniso-lygio-ivertinimas-pagal-ntrp/" target="_blank" rel="noopener">Click to read about NTRP</Link>
                        </InputLabel>
                        <TextField className={classes.formField} label="Your NTRP level" variant="outlined" required/>
                    </Grid>

                </Grid>
                <Grid xs={12} container justify="center" className={classes.gridContainer} item>
                    <Grid sm={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            Write where you want to play Tennis:
                        </InputLabel>
                        <TextField className={classes.formField} label="City/Cities" variant="outlined" required/>
                    </Grid>
                    <Grid sm={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            Write the time, when you are able to play:
                        </InputLabel>
                        <TextField className={classes.formField} label="The Time to Play" variant="outlined" required/>
                    </Grid>

                </Grid>
                <Grid className={classes.gridContainer}>
                    <InputLabel className={classes.descbAndContactLabel} style={{marginTop: 25}}>Describe your Post:</InputLabel>
                    <InputLabel className={classes.descbAndContactLabel}>For exaple: How long are you playing, Searching One-Time or Constant partner and etc... </InputLabel>
                    <TextField multiline rows={8} className={classes.descbAndContactForm} label="Post description" variant="outlined" required/>
                </Grid>
                <Grid className={classes.gridContainer}>
                    <InputLabel className={classes.descbAndContactLabel} style={{marginTop: 25}}>
                        Write available methods how people can Contact You:
                    </InputLabel>
                    <TextField multiline rows={4} className={classes.descbAndContactForm} label="Contact Me" variant="outlined" required/>
                </Grid>
                <Divider className={classes.divider} />
                <Box>
                    <Button className={classes.submitbutton}>
                        Submit New Form
                    </Button>
                </Box>
            </form>
        </Container>
    )
}