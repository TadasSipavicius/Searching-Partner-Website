import { Container, Dialog, DialogActions, DialogTitle, InputLabel, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';
import Axios from 'axios';

export default function CreateTournamentForm(){

    const [tournamentTitle, setTournamentTitle] = useState("");
    const [tournamentText, setTournamentText] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const { user } = useAuth0();
    const history = useHistory();

    const handleTitleOnChange = (e) =>{
        setTournamentTitle(e.target.value);
    }
    const handleTextOnChange = (e) =>{
        setTournamentText(e.target.value);
    }

    const handleOnCloseDialog = () =>{
        setIsOpen(false);
    }

    const redirectToTournamentPage = () =>{
        history.push('/findtournaments');
    }

    const onSubmitClick = async () =>{
        await Axios.post("http://localhost:3001/tournament/insert", {
            tournamentTitle: tournamentTitle,
            tournamentText: tournamentText,
            user_id: user?.sub
        });
        setIsOpen(true);
    }

    return(
        <Container>
            <form>
                <InputLabel>Tournament title:</InputLabel>
                <TextField 
                label="Title" 
                variant="outlined"
                error={tournamentTitle === ""}
                helperText={tournamentTitle === "" ? 'Empty!' : ''}
                required 
                fullWidth 
                onChange={handleTitleOnChange}
                />

                <InputLabel>Tournament Text:</InputLabel>
                <TextField 
                label="Tournament whole text"
                variant="outlined"
                error={tournamentText === ""}
                helperText={tournamentText === "" ? 'Empty!' : ''}
                multiline
                rows={20}
                required
                fullWidth
                onChange={handleTextOnChange}
                />
                
                {((tournamentTitle && tournamentText) === "") ? (
                    <Button variant="outlined" disabled>Submit Form</Button>
                ) : (
                    <Button variant="outlined" onClick={onSubmitClick}>
                        Submit Form
                    </Button>
                )}
                
                <Dialog 
                    open={isOpen}
                    onClose={handleOnCloseDialog}
                >
                    <DialogTitle>
                        Insert is Completed. Get back to Tournament page?
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={redirectToTournamentPage}>Yes</Button>
                        <Button onClick={handleOnCloseDialog}>No</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Container>
    )
}