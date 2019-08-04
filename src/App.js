import React from 'react';
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import Home from './views/Home'
import Cart from './views/Cart'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
