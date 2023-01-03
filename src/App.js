import Nav from "./components/nav/Nav";
import About from "./components/About";
import Design from "./components/Portfolio";
import Contact from "./components/Contact";
import { home } from "./components/Data";
import Home from "./components/Home";
import FooterContact from './components/FooterContact';
import ProgressBar from "./components/ProgressBar";
import SyncLoader from "react-spinners/SyncLoader";
import {useState, useEffect} from "react"

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3500)
  }, [])
  return (
    <div className="App">
       {
        loading ?
        <div className="loader">
        <SyncLoader
        loading={loading}
        size={30}
        color="black"
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.5}
      /></div>
      :
      <>
      <Nav/>
      <ProgressBar/>
      <Home images={home}/>
      <About/>
      <Design/>
      <Contact/>
      <FooterContact/>
      </>
}
    </div>
  );
}

export default App;
