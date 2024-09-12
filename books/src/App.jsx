import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import Navigation from './Pages/Navigation'; // Ensure the import path is correct
import ErrorBoundary from './components/ErrorBoundary'; // Ensure the import path is correct

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navigation /> {/* Ensure Navigation is always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
