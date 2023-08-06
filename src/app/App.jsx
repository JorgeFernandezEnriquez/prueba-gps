import React, { Component } from "react";
import './assets/style.css'; 
import ubbsImage from "./assets/ubbs.png"
class App extends Component{
    render() {
        return (
            <div>
                <h1>Hola carlita</h1>
                <h2>no te acorday na</h2>
                <h3>cuando te estaba dando duro duro</h3>
                <h4>y seco</h4>
                <img src={ubbsImage} alt="Ubicación de la Imagen" />
            </div>
        )
    }
}

export default App;