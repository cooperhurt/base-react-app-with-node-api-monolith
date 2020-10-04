import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Home } from "views/Home/Home";

const hist = createBrowserHistory();
export const Routes: React.FC = () => {
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
};
