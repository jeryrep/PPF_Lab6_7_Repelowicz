import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {CAbout} from "./CAbout";
import {CMaterials} from "./CMaterials";
import {CCooperation} from "./CCooperation";
import {CContact} from "./CContact";
import CSandbox from "./CSandbox";

export const CRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route exact path="/home">
                <CAbout/>
            </Route>
            <Route exact path="/materials">
                <CMaterials/>
            </Route>
            <Route exact path="/cooperation">
                <CCooperation/>
            </Route>
            <Route exact path="/about">
                <CAbout/>
            </Route>
            <Route exact path="/contact">
                <CContact/>
            </Route>
            <Route exact path="/sandbox">
                <CSandbox/>
            </Route>
        </Switch>
    );
}