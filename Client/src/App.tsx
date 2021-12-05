import React from 'react';
import theme from './theme';
import { CssBaseline, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import {Route, Switch} from 'react-router-dom';
import ResponsiveNavigationBar from './Layout/NavigationBarItems/ResponsiveNavigationBar';
import './App.css';
import ProtectedRoute from './Components/Auth0/ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';


const useStyles = makeStyles({
  root: {
      backgroundColor: "#E6F7F3",
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
  },
});

export default function App() {

  const classes = useStyles();
  const { user } = useAuth0();
  const adminID = process.env.REACT_APP_ADMINISTR_ID;

  return (
    
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <div className={classes.root}>
        <ResponsiveNavigationBar />
        <React.Suspense fallback={<Typography></Typography>}>
          <Switch>
            <Route exact path='/' component={React.lazy(() => import('./Pages/Home'))}/>
            <Route exact path='/findplayers' component={React.lazy(() => import('./Pages/FindPlayers'))}/>
            <Route exact path='/findtournaments' component={React.lazy(() => import('./Pages/FindTournaments'))}/>
            <Route exact path='/blog' component={React.lazy(() => import('./Pages/Blog'))}/>
            <Route exact path='/createpost' component={React.lazy(() => import('./Pages/CreatePost'))}/>
            <Route exact path='/loginrequirement' component={React.lazy(() => import('./Pages/LoginRequirement'))}/>
            {user?.sub === adminID ? <Route exact path='/createblog' component={React.lazy(() => import('./Components/AddBlogForm'))}/>
             : <Route exact component={React.lazy(() => import('./Pages/PageNotFound'))}/>}
            <ProtectedRoute
              component= {React.lazy(() => import('./Pages/Profile'))}
              exact
              path="/profile"
              />
            <Route exact component={React.lazy(() => import('./Pages/PageNotFound'))}/>
          </Switch>
        </React.Suspense>
      </div>
    </ThemeProvider>

  );
}