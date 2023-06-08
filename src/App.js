
import Navs from "./components/Navigation";
import Content from "./components/Content";
import Nebula from "./components/Nebula";
import Footer from './components/Footer'
import './App.css'


function App() {
  return (
    <div className='App-Container' id="About">

      <Navs />
      <Nebula />
      <Content />
      <Footer/>
    </div>

  );
}

export default App;