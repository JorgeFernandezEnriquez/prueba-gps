import React, { Component } from "react";
import ubbsImage from "../assets/ubbs.png";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap

class Inicio extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={ubbsImage} alt="Ubicación de la Imagen" className="img-fluid" />
                <div className="mt-3">
                    <Link to="/crear-evento" className="btn btn-dark">
                        Ir a Crear Evento
                    </Link>
                    <Link to="/inscribir-evento" className="btn btn-dark ml-2">
                        Ir a Inscribir Evento
                    </Link>
                </div>
            </div>
        );
    }
}

export default Inicio;