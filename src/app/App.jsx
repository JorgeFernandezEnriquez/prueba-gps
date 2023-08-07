import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Jorge/index.jsx';
import CrearEvento from './Jorge/CrearEvento.jsx';
import InscribirEvento from './Jorge/InscribirEvento.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/crear-evento" element={<CrearEvento />} />
                <Route path="/inscribir-evento" element={<InscribirEvento />} />
            </Routes>
        </Router>
    );
};

export default App;