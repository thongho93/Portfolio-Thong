import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

const HomePage = React.lazy(() => import("./routes/HomePage"));
const AboutPage = React.lazy(() => import("./routes/About"));
const PassionPage = React.lazy(() => import("./routes/Passion"));
const ExperiencePage = React.lazy(() => import("./routes/ExperiencePage"));
const WorkPage = React.lazy(() => import("./routes/Work"));
const ContactPage = React.lazy(() => import("./routes/Contact"));

function Layout() {
  const aboutRef = React.createRef();
  const passionRef = React.createRef();
  const experienceRef = React.createRef();
  const workRef = React.createRef();
  const contactRef = React.createRef();

  return (
    <div style={{ backgroundColor: "white", overflowX: "hidden" }}>
      <Header
        aboutRef={aboutRef}
        passionRef={passionRef}
        experienceRef={experienceRef}
        workRef={workRef}
        contactRef={contactRef}
      />{" "}
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage aboutRef={aboutRef} />
        <AboutPage aboutRef={aboutRef} passionRef={passionRef} />{" "}
        <PassionPage passionRef={passionRef} experienceRef={experienceRef} />
        <ExperiencePage experienceRef={experienceRef} workRef={workRef} />
        <WorkPage workRef={workRef} contactRef={contactRef} />
        <ContactPage contactRef={contactRef} />
      </Suspense>
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
