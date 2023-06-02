import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import RegisterList from "./pages/registerlist/RegisterList";

import { useFetch } from "./hooks/useFetch";

export default function Routers() {
    const { data: records } = useFetch("http://localhost:3000/records");
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route exact path="/cadastro" element={ <Register records={records} /> }/>
            <Route exact path="/lista-de-cadastros" element={ <RegisterList records={records} />} />
        </Routes>
    )
}