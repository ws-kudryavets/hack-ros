import React from "react";
import Index from "pages/index";
import About from "pages/about";
import Team from "pages/team";
import Contact from "pages/contact";
import Start from "pages/start";
import Index2 from "pages/index2";
import Goose from "pages/goose";
import Video from "pages/video";
import Goose1 from "pages/goose1";
import Goose2 from "pages/goose2";
import Goose3 from "pages/goose3";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/team' component={Team}/>
			<Route exact path='/team/contact' component={Contact}/>
			<Route exact path='/start' component={Start}/>
			<Route exact path='/index2' component={Index2}/>
			<Route exact path='/goose' component={Goose}/>
			<Route exact path='/video' component={Video}/>
			<Route exact path='/goose1' component={Goose1}/>
			<Route exact path='/goose2' component={Goose2}/>
			<Route exact path='/goose3' component={Goose3}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
