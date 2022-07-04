import React, { FC } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import { Cinema } from "@/pages/cinema";
import { SearchFilm } from "@/pages/search";
import { DetailFilm } from "@/pages/detail-film";
import Layout from "@/ui/layout";

const App: FC = () => (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Cinema />} />
            <Route path='/film/:id' element={<DetailFilm />} />
            <Route path='/search' element={<SearchFilm />} />
        </Route>
    </Routes>
);

export default App;
