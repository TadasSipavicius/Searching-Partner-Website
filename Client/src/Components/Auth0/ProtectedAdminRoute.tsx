import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route } from "react-router-dom";

export default function ProtectedAdminRoute({ component: Component, ...args }){
    
    const { user , isLoading } = useAuth0();
    const adminID = process.env.REACT_APP_ADMINISTR_ID;

    if (isLoading) {
        return <div style={{textAlign: "center"}}>Loading ...</div>;
    }

    return(
        (user?.sub === adminID) ? (
            <Route
            component={Component}
            {...args}
            />
        ) : (
            <Route 
            exact 
            component={React.lazy(() => import('../../Pages/PageNotFound'))}
            />
        )
    )
}