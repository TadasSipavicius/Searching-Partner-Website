import { Button, Container, InputLabel, TextField } from '@material-ui/core';
import React from 'react';

export default function AddBlogForm(){
    return(
        <Container>
            <form>
                <InputLabel>Blog title:</InputLabel>
                <TextField 
                label="Title" 
                variant="outlined" 
                required 
                fullWidth 
                />

                <InputLabel>Blog Text:</InputLabel>
                <TextField 
                label="Blog whole text"
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