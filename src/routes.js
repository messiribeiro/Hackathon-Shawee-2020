// ATAQUE EPILÉTICO
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login'
import Profile from './pages/profile'
import Register from './pages/Register'
import ProductRegistration from './pages/ProductRegistration'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Login} exact />
            <Route path="/profile" component={Profile}/>
            <Route path="/register" component={Register}  />
            <Route path="/productRegistration" component={ProductRegistration} />
        </BrowserRouter>
    )
}

export default Routes;