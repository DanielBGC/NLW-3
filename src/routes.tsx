import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from "./pages/landing"
import OrphanagesMap from "./pages/OrphanagesMap"
import Orphanage from "./pages/Orphanage"
import CreateOrphanage from "./pages/CreateOrphanage"

function Routes() {
    return(
        <BrowserRouter>
            <Switch> {/* Switch => Apenas uma única rota será chamada por vez */}
                <Route path="/" exact component={LandingPage} />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes