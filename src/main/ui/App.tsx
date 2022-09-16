import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "../../components/header/Header";
import {Pages} from "./Pages";

export const App = () => {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    )
}