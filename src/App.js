// src/App.js
import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <ProductList />
    </div>
  );
};

export default App;
