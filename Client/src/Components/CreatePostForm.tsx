import { Box, Button, createStyles, InputLabel, Link, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        theLabel: {
            marginBottom: 6,
        },
        formField: {
            minWidth: 300,
        },
        descbAndContactForm: {
            minWidth: 400,
        },
        submitbutton: {
            marginTop: 15,
            marginBottom: 45,
        }
    }))

export default function CreatePostForm(){

    const classes = useStyles();
    
    return(
        <form>
            <Box marginTop={2.5} marginBottom={2.5}>
                <InputLabel className={classes.theLabel} >
                    Write your Name or Nickname:
                </InputLabel>
                <TextField className={classes.formField} label="Name" variant="outlined" required/>
            </Box>
            <Box marginTop={2.5} marginBottom={2.5}>
                <InputLabel className={classes.theLabel}>
                    Write your Age:
                </InputLabel>
                <TextField className={classes.formField} label="Your Age" variant="outlined"/>
            </Box>
            <Box marginTop={2.5} marginBottom={2.5} >
                <InputLabel className={classes.theLabel}>
                    Enter your Gender:
                </InputLabel>
                <TextField 
                    className={classes.formField}
                    label="Gender"
                    variant="outlined"
                    required
                />
            </Box>
            <Box marginTop={2.5} marginBottom={2.5}>
                <InputLabel className={classes.theLabel}>
                    <Link href="https://tenisonamai.lt/teniso-lygio-ivertinimas-pagal-ntrp/" target="_blank" rel="noopener">Click to read about NTRP</Link>
                </InputLabel>
                <TextField className={classes.formField} label="Your NTRP level" variant="outlined" required/>
            </Box>
            <Box marginTop={2.5} marginBottom={2.5}>
                <InputLabel className={classes.theLabel}>
                    Write where you want to play Tennis:
                </InputLabel>
                <TextField className={classes.formField} label="City/Cities" variant="outlined" required/>
            </Box>
            <Box marginTop={2.5} marginBottom={2.5}>
                <InputLabel className={classes.theLabel}>
                    Write the time, when you are able to play:
                </InputLabel>
                <TextField className={classes.formField} label="The Time to Play" variant="outlined" required/>
            </Box>
            <Box marginTop={2.5} marginBottom={2.5}>
                <InputLabel>Describe your Post:</InputLabel>
                <InputLabel>For expl: How long are you playing... </InputLabel>
                <InputLabel className={classes.theLabel}>Searching One-Time or Constant partner and etc...</InputLabel>
                <TextField multiline rows={8} className={classes.descbAndContactForm} label="Post description" variant="outlined" required/>
            </Box>
            <Box marginTop={2.5} marginBottom={2.5}>
                <InputLabel className={classes.theLabel}>
                    Write available methods how people can Contact You:
                </InputLabel>
                <TextField multiline rows={4} className={classes.descbAndContactForm} label="Contact Me" variant="outlined" required/>
            </Box>

            <Box>
                <Button className={classes.submitbutton}>
                    Submit New Form
                </Button>
            </Box>
        </form>
    )
}