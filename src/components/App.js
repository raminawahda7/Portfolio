// import logo from "./logo.svg";
import "../App.css";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
};

export default App;
