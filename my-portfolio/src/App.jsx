import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/About";
import PassionPage from "./routes/Passion";
import ExperiencePage from "./routes/ExperiencePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

function Layout() {
  const aboutRef = React.createRef();
  const passionRef = React.createRef();
  const experienceRef = React.createRef();

  return (
    <div>
      <Header />
      <HomePage aboutRef={aboutRef} />
      <AboutPage aboutRef={aboutRef} passionRef={passionRef} />{" "}
      <PassionPage passionRef={passionRef} experienceRef={experienceRef} />
      <ExperiencePage experienceRef={experienceRef} />
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
