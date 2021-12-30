import React, { useEffect, useState } from 'react';
import { Container, Dialog, DialogActions, DialogTitle, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import {useParams} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

interface RouteParams {
    id: string
}    

export default function TournamentPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id);
    const history = useHistory();
    const { user } = useAuth0();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;

    const [tournamentData, setTournamentData] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
   

    // !!!
    // Reikia padaryt, kad paimtu pagal ID, o ne visus
    // !!!
    useEffect(() =>{
        Axios.get("http://localhost:3001/tournament/get").then((response) =>{
            setTournamentData(response.data);
        });
    }, []);

    const handleOnCloseDialog = () =>{
        setIsOpen(false);
    }

    const redirectToHomePage = () =>{
        history.push('/');
    }

    const deleteTournament = async (tournamentID) =>{
        await Axios.delete(`http://localhost:3001/tournament/delete/${tournamentID}`);
        setIsOpen(true);
    }

    return(
        <PageContainer>
            {tournamentData.filter(data => data.id === id).map(item =>(
                <Container key={item.id}>
                    <Typography>{item.tournament_title}</Typography>
                    <Typography>{item.tournament_text}</Typography>
                    {((user?.sub === item.user_id) || (adminID === user?.sub)) ? (
                        <>
                        <Button variant="contained" color="error" onClick={() => deleteTournament(item.id)}>Delete</Button>
                        <Button variant="contained" color="success">Edit</Button>
                        </>
                    ) : null}
                    <Dialog 
                        open={isOpen}
                        onClose={handleOnCloseDialog}
                    >
                        <DialogTitle>
                            Delete is Completed. Get back to Home page?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={redirectToHomePage}>Yes</Button>
                            <Button onClick={handleOnCloseDialog}>No</Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}
