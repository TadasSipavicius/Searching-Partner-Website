import React, { useEffect, useState } from 'react';
import { Button, Container, TableBody, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import PageContainer from '../Components/PageContainer';
import ContactForm from '../Components/ContactForm';

interface RouteParams {
    id: string
}    

export default function FindPlayerPage() {

    const params = useParams<RouteParams>();
    const id = parseInt(params.id)
    const adminID = process.env.REACT_APP_ADMINISTR_ID;
    const { user } = useAuth0();

    const [findPlayerData, setFindPlayerData] = useState<any[]>([]);


    // !!!
    // Reikia padaryt, kad paimtu pagal ID, o ne visus
    // !!!
    useEffect(() =>{
        Axios.get("http://localhost:3001/findplayer/get").then((response) =>{
            setFindPlayerData(response.data);
        });
    }, []);
    return(
        <PageContainer>
            {findPlayerData.filter(data => data.id === id).map(item =>(
                <TableContainer sx={{ maxWidth: 450 }} component={Paper} key={item.id}>
                    <Table sx={{ maxWidth: 450 }} aria-label="simple table">
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
                    
                </TableContainer>
            ))}
            <ContactForm />
        </PageContainer>
    )
}