import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import Products from "../pages/ProductsPage";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    
    <Router>
      <NavBar background={'transparent'} />
      <Routes>
          <Route exact path="/detail/:id" element={<DetailPage />}>
          </Route>
          <Route exact path="/products" element={<Products />}>
          </Route>
          <Route exact path="/" element ={ <Home />}>
          </Route>
        </Routes>
        <Footer />
    </Router>
  );
};

export default AppRouter;