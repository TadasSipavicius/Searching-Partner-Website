import { Button, Container, InputLabel, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';

export default function CreateTournamentForm(){

    const [tournamentTitle, setTournamentTitle] = useState("");
    const [tournamentText, setTournamentText] = useState("");
    const { user } = useAuth0();

    const handleTitleOnChange = (e) =>{
        setTournamentTitle(e.target.value);
    }
    const handleTextOnChange = (e) =>{
        setTournamentText(e.target.value);
    }

    const onSubmitClick = () =>{
        Axios.post("http://localhost:3001/tournament/insert", {
            tournamentTitle: tournamentTitle,
            tournamentText: tournamentText,
            user_id: user?.sub
        }).then(() => {
            alert("Insert is successful")
        })
    }

    return(
        <Container>
            <form>
                <InputLabel>Tournament title:</InputLabel>
                <TextField 
                label="Title" 
                variant="outlined"
                required 
                fullWidth 
                onChange={handleTitleOnChange}
                />

                <InputLabel>Tournament Text:</InputLabel>
                <TextField 
                label="Tournament whole text"
                variant="outlined"
                multiline
                rows={20}
                required
                fullWidth
                onChange={handleTextOnChange}
                />

                <Button onClick={onSubmitClick}>
                    Submit Form
                </Button>
            </form>
        </Container>
    )
}