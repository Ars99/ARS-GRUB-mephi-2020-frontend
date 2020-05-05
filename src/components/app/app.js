import React from 'react';
import { RegistrationPage, LoginPage, MainPage } from '../pages';
import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <Route path='/login' exact component={LoginPage}/>
            <Route path='/reg' exact component={RegistrationPage}/>
            <Route path='/main' exact component={MainPage}/>
        </Router>
    );
}

export default App;