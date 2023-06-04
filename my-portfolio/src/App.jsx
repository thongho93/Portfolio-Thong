import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/About";
import PassionPage from "./routes/Passion";
import ExperiencePage from "./routes/ExperiencePage";
import WorkPage from "./routes/Work";
import ContactPage from "./routes/Contact";
import Footer from "./components/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

function Layout() {
  const aboutRef = React.createRef();
  const passionRef = React.createRef();
  const experienceRef = React.createRef();
  const workRef = React.createRef();
  const contactRef = React.createRef();

  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <HomePage aboutRef={aboutRef} />
      <AboutPage aboutRef={aboutRef} passionRef={passionRef} />{" "}
      <PassionPage passionRef={passionRef} experienceRef={experienceRef} />
      <ExperiencePage experienceRef={experienceRef} workRef={workRef} />
      <WorkPage workRef={workRef} contactRef={contactRef} />
      <ContactPage contactRef={contactRef} />
      <Footer />
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
