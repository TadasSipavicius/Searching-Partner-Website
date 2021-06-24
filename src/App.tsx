import React from 'react';
import theme from './theme';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import {Route, Switch} from 'react-router-dom';
import ResponsiveNavigationBar from './Layout/ResponsiveNavigationBar';
import './App.css';

const useStyles = makeStyles({
  root: {
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
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={React.lazy(() => import('./Pages/Home'))}/>
            <Route exact path='/findplayers' component={React.lazy(() => import('./Pages/FindPlayers'))}/>
            <Route exact path='/findtournaments' component={React.lazy(() => import('./Pages/FindTournaments'))}/>
            <Route exact path='/blog' component={React.lazy(() => import('./Pages/Blog'))}/>
            <Route exact component={React.lazy(() => import('./Pages/PageNotFound'))}/>
          </Switch>
        </React.Suspense>
      </div>
    </ThemeProvider>

  );
}