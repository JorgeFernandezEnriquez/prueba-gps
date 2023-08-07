import React, { Component } from "react";
import ubbsImage from "../assets/ubbs.png"
import { Link } from 'react-router-dom';

class Inicio extends Component{
    render() {
        return (
            <div>
                <h1>Crear Evento</h1>
                
                <img src={ubbsImage} alt="Ubicación de la Imagen" />
                
            </div>
        )
    }
}


export default Inicio;