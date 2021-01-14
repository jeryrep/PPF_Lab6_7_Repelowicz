import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {CHome} from "./CHome";
import {CMaterials} from "./CMaterials";
import {CCooperation} from "./CCooperation";
import {CContact} from "./CContact";
import {CLogin} from "./CLogin";
import CSandbox from "./CSandbox";

export const CRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route exact path="/home">
                <CHome/>
            </Route>
            <Route exact path="/materials">
                <CMaterials/>
            </Route>
            <Route exact path="/cooperation">
                <CCooperation/>
            </Route>
            <Route exact path="/contact">
                <CContact/>
            </Route>
            <Route exact path="/login">
                {localStorage.getItem("log") ? <Redirect to="home"/> : <CLogin/>}
            </Route>
            <Route exact path="/sandbox">
                <CSandbox/>
            </Route>
        </Switch>
    );
}