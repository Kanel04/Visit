import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgencePage from "./pages/Agence";
import DashboardPage from "./pages/Dashboard";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import HotelPage from "./pages/Hotel";
import LieuPage from "./pages/Lieu";
import LoginPage from "./pages/Login";
import ProfilPage from "./pages/Profil";
import RegisterPage from "./pages/Register";
import RestaurantPage from "./pages/Restaurant";
import TransportPage from "./pages/Transport";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/lieu" element={<LieuPage />}></Route>
        <Route path="/restaurant" element={<RestaurantPage />}></Route>
        <Route path="/hotel" element={<HotelPage />}></Route>
        <Route path="/agence" element={<AgencePage />}></Route>
        <Route path="/transport" element={<TransportPage />}></Route>
        <Route path="/profil" element={<ProfilPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};
