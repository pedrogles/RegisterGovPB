import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import RegisterList from './pages/registerList/RegisterList';

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/cadastro" element={<Register />} />
            <Route exact path="/lista-de-cadastrados" element={<RegisterList />} />
        </Routes>
    )
}

export default Routers;