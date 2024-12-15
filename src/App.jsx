// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ArticleList from "./Components/ArticleList";
import ArticleDetail from "./Components/ArticleDetail";
import PostArticle from "./Components/PostArticle";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
// import ForgotPassword from "./Components/PostArticle";
import LoginScreen from "./auth/LoginScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* auth */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* app */} {/* Routs to view articles */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/post" element={<PostArticle />} />
        {/* <Route path="/article/:id" element={<ArticleList />} /> */}
        <Route path="/articles" element={<ArticleList />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
