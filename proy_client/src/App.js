import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import projectRoutes from "./config/routes";
import './App.scss';

  function App(){
    return (
      <BrowserRouter>
        <Routes>
          {projectRoutes.map((route,index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component/>
                </route.layout>
              }
              />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }

export default App;



