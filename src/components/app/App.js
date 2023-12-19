import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import NavBar from "../navbar/navbar";
import {
  MainPage,
  LogInPage,
  SignUpPage,
  ProfilePage,
  WeatherPage,
  SearchPage,
  WeatherTravelPage,
  WeatherSportPage,
} from "../pages";
import userAuthService from "../../service/user-auth";
import Footer from "../contact-form/Footer";

function App() {
  const isLoggedIn = userAuthService.getIsLogged();

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile/:email" element={<ProfilePage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/weathertravel" element={<WeatherTravelPage />} />
        <Route path="/weathersport" element={<WeatherSportPage />} />

        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
