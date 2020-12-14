import React from 'react';
import './scss/main.css';
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import {HashRouter as Router} from 'react-router-dom';




function App() {
    return (
        <div className="App">
            <Router>
                <Home/>
                <About/>
                <Portfolio/>
                <Contact/>
            </Router>

        </div>
    );
}

export default App;
