// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ArticleList from './Components/ArticleList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/article/:id" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} /> {/* Route to view all articles */}
      </Routes>
    </Router>
  );
};

export default App;
