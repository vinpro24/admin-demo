import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/styles/index.scss';

import Home from './containers/Home';
import Email from './containers/Email';
import Compose from './containers/Compose';
import Chat from './containers/Chat';
import Calendar from './containers/Calendar';
import Charts from './containers/Charts';
import Forms from './containers/Forms';
import UIElements from './containers/UIElements';
import BasicTables from './containers/Tables/BasicTables';
import DataTables from './containers/Tables/DataTables';
import GoogleMaps from './containers/Maps/GoogleMaps';
import VectorMaps from './containers/Maps/VectorMaps';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Blank from './containers/Blank';
import NotFound from './components/NotFound';
import Error500 from './components/Error500';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/email" component={Email} />
                    <Route exact path="/compose" component={Compose} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/calendar" component={Calendar} />
                    <Route exact path="/charts" component={Charts} />
                    <Route exact path="/forms" component={Forms} />
                    <Route exact path="/ui-elements" component={UIElements} />
                    <Route exact path="/basic-table" component={BasicTables} />
                    <Route exact path="/data-table" component={DataTables} />
                    <Route exact path="/google-maps" component={GoogleMaps} />
                    <Route exact path="/vector-maps" component={VectorMaps} />
                    <Route exact path="/blank" component={Blank} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/500" component={Error500} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
