import React, { Component } from 'react';
import './App.css';
import Formulario from './element/Formulario';
import Table from "./element/Table";

class App extends Component {


    render() {
        return (
            <div>
              <div className="App">
                <header className="App-header">
                  <Formulario />
                </header>
              </div>
            </div>
        );
    }
}

export default App;
