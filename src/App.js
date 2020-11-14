import React from "react";
import Index from "pages/index";
import About from "pages/about";
import Team from "pages/team";
import Contact from "pages/contact";
import Index1 from "pages/index1";
import Index2 from "pages/index2";
import Index11 from "pages/index11";
import Index111 from "pages/index111";
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
			<Route exact path='/index1' component={Index1}/>
			<Route exact path='/index2' component={Index2}/>
			<Route exact path='/index11' component={Index11}/>
			<Route exact path='/index111' component={Index111}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
