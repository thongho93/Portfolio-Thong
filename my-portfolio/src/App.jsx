import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./routes/HomePage";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
