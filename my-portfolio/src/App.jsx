import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/About";

function Layout() {
  const aboutRef = React.createRef();

  return (
    <div>
      <Header />
      <HomePage aboutRef={aboutRef} />
      <AboutPage aboutRef={aboutRef} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
