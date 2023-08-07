import React, { Component } from "react";
import ubbsImage from "../assets/ubbs.png"

class Login extends Component{
    render() {
        return (
            <div>
                <h1>Inscribir Evento</h1>
                <img src={ubbsImage} alt="Ubicación de la Imagen" />
            </div>
        )
    }
}


export default Login;