import React from 'react';
import theme from './theme';
import { CssBaseline, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import {Route, Switch} from 'react-router-dom';
import ResponsiveNavigationBar from './Layout/NavigationBarItems/ResponsiveNavigationBar';
import './App.css';
import ProtectedRoute from './Components/Auth0/ProtectedRoute';
import ProtectedAdminRoute from './Components/Auth0/ProtectedAdminRoute';


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


  return (
    
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <div className={classes.root}>
        <ResponsiveNavigationBar />
        <React.Suspense fallback={<Typography style={{textAlign: "center"}}>Loading...</Typography>}>
          <Switch>
            <Route exact path='/' component={React.lazy(() => import('./Pages/Home'))}/>
            <Route exact path='/findplayers' component={React.lazy(() => import('./Pages/FindPlayers'))}/>
            <Route exact path='/findtournaments' component={React.lazy(() => import('./Pages/FindTournaments'))}/>
            <Route exact path='/blog' component={React.lazy(() => import('./Pages/Blog'))}/>
            <Route exact path='/createpost' component={React.lazy(() => import('./Pages/CreatePost'))}/>
            <Route exact path='/loginrequirement' component={React.lazy(() => import('./Pages/LoginRequirement'))}/>
            <ProtectedRoute
              component= {React.lazy(() => import('./Pages/Profile'))}
              exact
              path="/profile"
            />
            <ProtectedAdminRoute 
              component= {React.lazy(() => import('./Pages/CreateBlog'))}
              path="/createblog"
              exact
            />
            <Route exact component={React.lazy(() => import('./Pages/PageNotFound'))}/>
          </Switch>
        </React.Suspense>
      </div>
    </ThemeProvider>

  );
}