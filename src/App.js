import Nav from "./components/nav/Nav";
import About from "./components/About";
import Design from "./components/Design";
import Contact from "./components/Contact";
import Space from "./components/Space"
import Residential from "./components/Residential";
import { home } from "./components/Data";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home images={home}/>
      <Nav/>
      <About/>
      <Design/>
      <Space/>
      <Residential/>
      <Contact/>
    </div>
  );
}

export default App;
