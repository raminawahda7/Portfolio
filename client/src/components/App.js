// import logo from "./logo.svg";
import "../App.css";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
