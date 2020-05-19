import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import WineService from './services/wine-service';
import WineServiceContext from './components/wine-service-context';
import store from './store'

const wineService = new WineService();

ReactDOM.render(
    <Provider store={store}>
        <WineServiceContext.Provider value={wineService}>
            <Router>
                <App />
            </Router>
        </WineServiceContext.Provider>
    </Provider>
    , document.getElementById('root'));

