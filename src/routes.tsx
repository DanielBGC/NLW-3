import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from "./pages/landing"
import OrphanagesMap from "./pages/OrphanagesMap"

function Routes() {
    return(
        <BrowserRouter>
            <Switch> {/* Switch => Apenas uma única rota será chamada por vez */}
                <Route path="/" exact component={LandingPage} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes