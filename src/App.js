import Nav from "./components/nav/Nav";
import About from "./components/About";
import Design from "./components/Design";
import Contact from "./components/Contact";
import Space from "./components/Space"
import Residential from "./components/Residential";

function App() {
  return (
    <div className="App">
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
