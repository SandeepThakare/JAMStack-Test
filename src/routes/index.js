import React from "react";
import { Route, Switch } from "react-router-dom";
import About from '../components/pages/aboutme';
import Skills from '../components/pages/skills';
import Work from '../components/pages/Works';
import Contact from '../components/pages/contact';

const Routing = () => (
    <div>
        <Switch>
            <Route exact path='/' component={About} />
            <Route path='/works' component={Work} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/skills' component={Skills} />
        </Switch>
        {/* <Switch>
            <Route exact path='/about' component={AboutMe} />
        </Switch> */}
    </div>
);

export default Routing;