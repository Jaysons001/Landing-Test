import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Pricing from "./components/Pricing";
import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Homebutton from "./components/Homebutton";

function App() {
  return (
    <Box className="App" w={{ base: "none", lg: "1440px" }} mx={"auto"}>
      <Navbar />
      <Homebutton />
      <section id="home">
        <LandingPage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </Box>
  );
}

export default App;
