import React from "react";
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomesPage';
import Header from "./components/partials/Header";
import Footer1 from "./components/partials/Footer1";
import './style/app.css';
import About from './Pages/AboutUs';
import Kontakt from './Pages/Kontakt';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutUs' element={<About />} />
        <Route path='/kontakt' element={<Kontakt />} />
      </Routes>
      <Footer1/>
      
    </div>
  );
}

export default App;
