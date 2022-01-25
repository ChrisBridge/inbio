import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import About from './layout/about';
import Work from './layout/work';
import Contact from './layout/contact';


ReactDOM.render(
  <Router>
  <NavBar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
</Router>,
  document.getElementById('root')
);