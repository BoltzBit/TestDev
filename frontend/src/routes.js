import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Cadastro from './pages/Cadastro';
import Clientes from './pages/Clientes';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Cadastro} />
                <Route path="/clientes" exact  component={Clientes}/>
            </Switch>
        </Router>
    );
};

export default Routes;
