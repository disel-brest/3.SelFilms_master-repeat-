import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="contain">
                    <Main />
                </div>
            </div>
        );
    }
}

export default App;
