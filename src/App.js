import React from "react";
import Index from "pages/index";
import Contact from "pages/contact";
import Start from "pages/start";
import Goose from "pages/goose";
import Video from "pages/video";
import Goose1 from "pages/goose1";
import Goose2 from "pages/goose2";
import Goose3 from "pages/goose3";
import GooseTest from "pages/gooseTest";
import SettingsGoose from "pages/settingsGoose";
import Goose11 from "pages/goose11";
import GooseFinal from "pages/gooseFinal";
import Goose31 from "pages/goose31";
import Oehoy from "pages/oehoy";
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
			<Route exact path='/contact' component={Contact}/>
			<Route exact path='/start' component={Start}/>
			<Route exact path='/goose' component={Goose}/>
			<Route exact path='/video' component={Video}/>
			<Route exact path='/goose1' component={Goose1}/>
			<Route exact path='/goose2' component={Goose2}/>
			<Route exact path='/goose3' component={Goose3}/>
			<Route exact path='/goose-test' component={GooseTest}/>
			<Route exact path='/settings-goose' component={SettingsGoose}/>
			<Route exact path='/goose11' component={Goose11}/>
			<Route exact path='/goose-final' component={GooseFinal}/>
			<Route exact path='/goose31' component={Goose31}/>
			<Route exact path='/oehoy' component={Oehoy}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
