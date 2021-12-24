import { Button, Container, InputLabel, TextField } from '@material-ui/core';
import React from 'react';

export default function CreateTournamentForm(){

    return(
        <Container>
            <form>
                <InputLabel>Tournament title:</InputLabel>
                <TextField 
                label="Title" 
                variant="outlined"
                required 
                fullWidth 
                />

                <InputLabel>Tournament Text:</InputLabel>
                <TextField 
                label="Tournament whole text"
                variant="outlined"
                multiline
                rows={20}
                required
                fullWidth
                />

                <Button>
                    Submit Form
                </Button>
            </form>
        </Container>
    )
}