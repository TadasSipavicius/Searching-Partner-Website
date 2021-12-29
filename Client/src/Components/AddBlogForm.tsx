import { Button, Container, InputLabel, TextField } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import Axios from 'axios';

export default function AddBlogForm(){

    const [blogTitle, setBlogTitle] = useState("");
    const [blogText, setBlogText] = useState("");
    const { user } = useAuth0();

    const handleTitleOnChange = (e) =>{
        setBlogTitle(e.target.value);
    }
    const handleTextOnChange = (e) =>{
        setBlogText(e.target.value);
    }

    const onSubmitClick = () =>{
        Axios.post("http://localhost:3001/blog/insert", {
            blogTitle: blogTitle,
            blogText: blogText,
            user_id: user?.sub
        }).then(() => {
            alert("Insert is successful")
        })
    }
    return(
        <Container>
            <form>
                <InputLabel>Blog title:</InputLabel>
                <TextField 
                label="Title" 
                variant="outlined" 
                required 
                fullWidth 
                onChange={handleTitleOnChange}
                />
                <InputLabel>Blog Text:</InputLabel>
                <TextField 
                label="Blog whole text"
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