import './App.css';
import AboutPro from './Components/AboutPro';
import Foo from './Components/Foo';
import NavBar from './Components/NavBar';
import RoboMan from './Components/RoboMan';
import WhatWeDo from './Components/WhatWeDo';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutPro/>
      <RoboMan/>
      <WhatWeDo/>
      <Foo/>
    </div>
  );
}

export default App;
