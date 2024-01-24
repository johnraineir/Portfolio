import Navbar from "./assets/components/NavBar/navbar";
import Intro from "./assets/components/NavBar/Intro/intro";
import Projects from "./assets/components/NavBar/Project/projects";
import Skills from "./assets/components/NavBar/Skills/skills";
import Contact from "./assets/components/NavBar/Contact/contact";
import Footer from "./assets/components/NavBar/Footer/footer";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      

    </div>
  );
}

export default App;
