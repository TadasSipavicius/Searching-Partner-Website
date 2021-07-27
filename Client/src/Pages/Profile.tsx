import React from 'react';
import JSONPretty from 'react-json-pretty';
import { useAuth0 } from '@auth0/auth0-react';

import PageContainer from '../Components/PageContainer';

export default function Profile(){
    
    const { user } = useAuth0();

    return(
        <PageContainer>
            <img src={user?.picture} alt={user?.name}/>
            <JSONPretty id="json-pretty" data={JSON.stringify(user, null,2)}></JSONPretty>      
        </PageContainer>
    )
}
