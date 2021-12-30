import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

interface RouteParams {
    id: string
}    

export default function TournamentPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)
    const { user } = useAuth0();
    const [tournamentData, setTournamentData] = useState<any[]>([]);
    const adminID = process.env.REACT_APP_ADMINISTR_ID;

    // !!!
    // Reikia padaryt, kad paimtu pagal ID, o ne visus
    // !!!
    useEffect(() =>{
        Axios.get("http://localhost:3001/tournament/get").then((response) =>{
            setTournamentData(response.data);
        });
    }, []);

    const deleteTournament = (tournamentID) =>{
        Axios.delete(`http://localhost:3001/tournament/delete/${tournamentID}`);
    }
    return(
        <PageContainer>
            {tournamentData.filter(data => data.id === id).map(item =>(
                <Container key={item.id}>
                    <Typography>{item.tournament_title}</Typography>
                    <Typography>{item.tournament_text}</Typography>
                    {((user?.sub === item.user_id) || (adminID === user?.sub)) ? (
                        <>
                        <Button onClick={() => deleteTournament(item.id)}>Delete</Button>
                        <Button>Edit</Button>
                        </>
                    ) : null}
                    
                </Container>
            ))}
            <ContactForm />
        </PageContainer>
    )
}
