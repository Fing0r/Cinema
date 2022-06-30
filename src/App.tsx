import React, { FC } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Cinema from "@/pages/Cinema/Cinema";
import DetailFilm from "@/pages/DetailFilm/DetailFilm";
import Layout from "@/UI/Layout";

const App: FC = () => (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Cinema />} />
            <Route path='/film/:id' element={<DetailFilm />} />
        </Route>
    </Routes>
);

export default App;
