import React, { useEffect, useState } from 'react';
import { Container, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import Typography from '@mui/material/Typography';
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

const tournament_textStyle = {
    "white-space": "pre-wrap"
}
export default function TournamentPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id);
    const history = useHistory();
    const { user } = useAuth0();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;

    const [tournamentData, setTournamentData] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL!;

    // !!!
    // Reikia padaryt, kad paimtu pagal ID, o ne visus
    // !!!
    useEffect(() =>{
        Axios.get(`${API_URL}/tournament/get`).then((response) =>{
            setTournamentData(response.data);
        });
    }, [API_URL]);

    const handleOnCloseDialog = () =>{
        setIsOpen(false);
    }

    const redirectToHomePage = () =>{
        history.push('/');
    }

    const deleteTournament = async (tournamentID) =>{
        await Axios.delete(`${API_URL}/tournament/delete/${tournamentID}`);
        setIsOpen(true);
    }

    return(
        <PageContainer>
            {tournamentData.filter(data => data.id === id).map(item =>(
                <Container key={item.id}>
                    <Typography variant='h3'>{item.tournament_title}</Typography>
                    <Typography sx={tournament_textStyle}>{item.tournament_text}</Typography>
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
