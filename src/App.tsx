import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Nav} from "./components/Nav/Nav";
import {Pages} from "./components/Pages/Pages";

export const App = () => {
    return (
        <div>
            <HashRouter>
                <Nav/>
                <Pages/>
            </HashRouter>
        </div>
    )
}