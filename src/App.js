import Nav from "./components/nav/Nav";
import About from "./components/About";
import Design from "./components/Portfolio";
import Contact from "./components/Contact";
import { home } from "./components/Data";
import Home from "./components/Home";
import FooterContact from './components/FooterContact';
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="App">
      <Nav/>
      <ProgressBar/>
      <Home images={home}/>
      <About/>
      <Design/>
      <Contact/>
      <FooterContact/>
    </div>
  );
}

export default App;
