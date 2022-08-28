import React from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="top" >
      <NavBar />
      <section
        id="home"
        style={{ background: "linear-gradient(to top, white 40%, black 50%)" }}
      >
        <Home />
      </section>

      <section id="about" className="mt-5">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="footer">
        <Footer />
      </section>

     
    </div>
  );
}

export default App;
