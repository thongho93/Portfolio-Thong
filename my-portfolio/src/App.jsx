import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/About";
import PassionPage from "./routes/Passion";

function Layout() {
  const aboutRef = React.createRef();
  const passionRef = React.createRef();

  return (
    <div>
      <Header />
      <HomePage aboutRef={aboutRef} />
      <AboutPage aboutRef={aboutRef} passionRef={passionRef} />{" "}
      <PassionPage passionRef={passionRef} />
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
