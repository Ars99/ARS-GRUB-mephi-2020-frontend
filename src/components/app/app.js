import React from 'react';
import { RegistrationPage, LoginPage, MainPage } from '../pages';
import './app.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import WithWineService from '../hoc';


const App = ({WineService}) => {
    return (
        <Router>
            <Switch>
                <Route path='/login' exact component={LoginPage}/>
                <Route path='/reg' exact component={RegistrationPage}/>
                <Route path='/main' exact component={MainPage}/>
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
}

export default WithWineService()(App);