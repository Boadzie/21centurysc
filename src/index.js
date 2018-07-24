import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// COMPONENTS
import Home from './components/Home/home';
import Navigation from './components/navigation';
import Discover from './components/discover';
import Develop from './components/develop';
import Use from './components/use';
import About from './components/about';
import Contact from './components/contact';
import SignUp from './components/signUp';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/discover" component={Discover}></Route>
                    <Route path="/develop" component={Develop}></Route>
                    <Route path="/use" component={Use}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/signUp" component={SignUp}></Route>
                    <Route path="/" component={Home}></Route>                   
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root')); 