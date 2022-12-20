import Nav from "./components/nav/Nav";
import About from "./components/About";
import Design from "./components/Portfolio";
import Contact from "./components/Contact";
import { home } from "./components/Data";
import Home from "./components/Home";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="App">
      <ProgressBar/>
      <Home images={home}/>
      <Nav/>
      <About/>
      <Design/>
      <Contact/>
    </div>
  );
}

export default App;
