import React from 'react';
import './scss/main.css';
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Test from "./components/test";

function App() {
    return (
        <div className="App">
            {/*<Test/>*/}
            <Home/>
            <About/>
            {/*<Portfolio/>*/}
            {/*<Contact/>*/}
        </div>
    );
}

export default App;
