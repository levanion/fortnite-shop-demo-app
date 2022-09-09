import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";

import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ItemPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
