import { Box, Container, createStyles, Dialog, DialogActions, DialogTitle, Divider, Grid, InputLabel, Link, makeStyles, TextField, Theme } from '@material-ui/core';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';

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

    const { user } = useAuth0();
    const history = useHistory();
    const classes = useStyles();

    const [playerName, setPlayerName] = useState("");
    const [playerAge, setPlayerAge] = useState("");
    const [playerGender, setPlayerGender] = useState("");
    const [playerNTRP, setPlayerNTRP] = useState("");
    const [playerCity, setPlayerCity] = useState("");
    const [playerTime, setPlayerTime] = useState("");
    const [playerDescription, setPlayerDescription] = useState("");
    const [playerContactInfo, setPlayerContactInfo] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL!;
    

    const handleNameOnChange = (e) =>{
        setPlayerName(e.target.value);
    }
    const handleAgeOnChange = (e) =>{
        setPlayerAge(e.target.value);
    }
    const handleGenderOnChange = (e) =>{
        setPlayerGender(e.target.value);
    }
    const handleNTPROnChange = (e) =>{
        setPlayerNTRP(e.target.value);
    }
    const handleCityOnChange = (e) =>{
        setPlayerCity(e.target.value);
    }
    const handleTimeOnChange = (e) =>{
        setPlayerTime(e.target.value);
    }
    const handleDescriptionOnChange = (e) =>{
        setPlayerDescription(e.target.value);
    }
    const handleContactInfoOnChange = (e) =>{
        setPlayerContactInfo(e.target.value);
    }

    const handleOnCloseDialog = () =>{
        setIsOpen(false);
    }

    const redirectToFindPlayerPage = () =>{
        history.push('/findplayers');
    }

    const onSubmitClick = async () =>{
        await Axios.post(`${API_URL}/findplayer/insert`, {
            playerName: playerName,
            playerAge: playerAge,
            playerGender: playerGender,
            playerNTRP: playerNTRP,
            playerCity: playerCity,
            playerTime: playerTime,
            playerDescription: playerDescription,
            playerContactInfo: playerContactInfo,
            playerUser_id: user?.sub
        });
        setIsOpen(true);
    }
    return(
        <Container className={classes.theForm}>
            <form>
                <Grid xs={12} container justify="center" item>
                    <Grid xs={12} lg={4} item>
                        <InputLabel className={classes.theLabel} >
                            Write your Name or Nickname:
                        </InputLabel>
                        <TextField 
                        className={classes.formField} 
                        label="Name" 
                        variant="outlined" 
                        required
                        onChange={handleNameOnChange}
                        error={playerName === ""}
                        helperText={playerName === "" ? 'Empty!' : ''}
                        />
                    </Grid>
                    <Grid xs={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            Write your Age:
                        </InputLabel>
                        <TextField 
                        className={classes.formField} 
                        label="Your Age" 
                        variant="outlined"
                        onChange={handleAgeOnChange}
                        />
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
                        onChange={handleGenderOnChange}
                        error={playerGender === ""}
                        helperText={playerGender === "" ? 'Empty!' : ''}
                        />
                    </Grid> 
                    <Grid sm={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            <Link href="https://tenisonamai.lt/teniso-lygio-ivertinimas-pagal-ntrp/" target="_blank" rel="noopener">Click to read about NTRP</Link>
                        </InputLabel>
                        <TextField 
                        className={classes.formField} 
                        label="Your NTRP level" 
                        variant="outlined" 
                        required
                        onChange={handleNTPROnChange}
                        error={playerNTRP === ""}
                        helperText={playerNTRP === "" ? 'Empty!' : ''}
                        />
                    </Grid>

                </Grid>
                <Grid xs={12} container justify="center" className={classes.gridContainer} item>
                    <Grid sm={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            Write where you want to play Tennis:
                        </InputLabel>
                        <TextField 
                        className={classes.formField} 
                        label="City/Cities" 
                        variant="outlined" 
                        required
                        onChange={handleCityOnChange}
                        error={playerCity === ""}
                        helperText={playerCity === "" ? 'Empty!' : ''}
                        />
                    </Grid>
                    <Grid sm={12} lg={4} item>
                        <InputLabel className={classes.theLabel}>
                            Write the time, when you are able to play:
                        </InputLabel>
                        <TextField 
                        className={classes.formField} 
                        label="The Time to Play" 
                        variant="outlined" 
                        required
                        onChange={handleTimeOnChange}
                        error={playerTime === ""}
                        helperText={playerTime === "" ? 'Empty!' : ''}
                        />
                    </Grid>

                </Grid>
                <Grid className={classes.gridContainer}>
                    <InputLabel className={classes.descbAndContactLabel} style={{marginTop: 25}}>Describe your Post:</InputLabel>
                    <InputLabel className={classes.descbAndContactLabel}>For exaple: How long are you playing, Searching One-Time or Constant partner and etc... </InputLabel>
                    <TextField 
                    multiline 
                    rows={8} 
                    className={classes.descbAndContactForm} 
                    label="Post description" 
                    variant="outlined" 
                    required
                    onChange={handleDescriptionOnChange}
                    error={playerDescription === ""}
                    helperText={playerDescription === "" ? 'Empty!' : ''}
                    />
                </Grid>
                <Grid className={classes.gridContainer}>
                    <InputLabel className={classes.descbAndContactLabel} style={{marginTop: 25}}>
                        Write available methods how people can Contact You:
                    </InputLabel>
                    <TextField 
                    multiline 
                    rows={4} 
                    className={classes.descbAndContactForm} 
                    label="Contact Me" 
                    variant="outlined"
                    required
                    onChange={handleContactInfoOnChange}
                    error={playerContactInfo === ""}
                    helperText={playerContactInfo === "" ? 'Empty!' : ''}
                    />
                </Grid>
                <Divider className={classes.divider} />
                <Box>
                    {((playerName && playerGender && playerNTRP && playerCity
                        && playerTime && playerDescription && playerContactInfo) === "") ? (
                            <Button variant="outlined" disabled>Submit Form</Button>
                        ) : (
                        <Button variant="outlined" onClick={onSubmitClick}>
                            Submit Form
                        </Button>
                        )}
                </Box>
                <Dialog 
                    open={isOpen}
                    onClose={handleOnCloseDialog}
                >
                    <DialogTitle>
                        Insert is Completed. Get back to FindPlayer page?
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={redirectToFindPlayerPage}>Yes</Button>
                        <Button onClick={handleOnCloseDialog}>No</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Container>
    )
}