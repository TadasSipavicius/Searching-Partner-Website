import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import { useHistory } from 'react-router';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';

import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';
import { makeStyles } from '@mui/styles';
import { Dialog, DialogActions, DialogTitle} from '@mui/material';

interface RouteParams {
    id: string
}    

const useStyles = makeStyles({
    table: {
        margin: "0 auto"
    }
});

export default function FindPlayerPage() {

    const classes = useStyles();
    const params = useParams<RouteParams>();
    const id = parseInt(params.id);
    const history = useHistory();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;
    const { user } = useAuth0();
    
    
    const [findPlayerData, setFindPlayerData] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL!;
    // !!!
    // Reikia padaryt, kad paimtu pagal ID, o ne visus
    // !!!
    useEffect(() =>{
        Axios.get(`${API_URL}/findplayer/get`).then((response) =>{
            setFindPlayerData(response.data);
        });
    }, [API_URL]);

    const handleOnCloseDialog = () =>{
        setIsOpen(false);
    }
    
    const redirectToHomePage = () =>{
        history.push('/');
    }
    const deleteTournament = async (findPlayerID) =>{
        await Axios.delete(`${API_URL}/findplayer/delete/${findPlayerID}`);
        setIsOpen(true);
    }
    return(
        <PageContainer>
            {findPlayerData.filter(data => data.id === id).map(item =>(
                <TableContainer className={classes.table} sx={{ maxWidth: 500 }} component={Paper} key={item.id}>
                    <Table sx={{ maxWidth: 500 }} aria-label="simple table">
                        <TableBody>
                            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell >Name:</TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Age:</TableCell>
                                <TableCell align="right">{item.age}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Gender:</TableCell>
                                <TableCell align="right">{item.gender}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >NTRP:</TableCell>
                                <TableCell align="right">{item.NTRP}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >City:</TableCell>
                                <TableCell align="right">{item.city}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Time:</TableCell>
                                <TableCell align="right">{item.time}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Description:</TableCell>
                                <TableCell align="right">{item.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Contact Information:</TableCell>
                                <TableCell align="right">{item.contact_info}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    {((user?.sub === item.user_id) || (adminID === user?.sub)) ? (
                        <>
                        <Button variant="contained" color="error" onClick={() => deleteTournament(item.id)}>Delete</Button>
                        <Button variant="contained" color="success">Edit</Button>
                        </>
                    ) : null}
                </TableContainer>
            ))}
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
            <ContactForm />
        </PageContainer>
    )
}