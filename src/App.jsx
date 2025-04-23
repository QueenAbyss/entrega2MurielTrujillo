import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css"

import Header from "./components/Header/Header";
import HomePage from "./page/HomePage/HomePage";
import CharacterPage from "./page/CharacterPage/CharacterPage";
import AboutPage from "./page/AboutPage/AboutPage";
import Detalle from "./page/Detalle/Detalle";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div id="div-header">
          <div id="menu">
            <Header/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/masculino" element={<CharacterPage genero="Male"/>}/>
          <Route path="/femenino" element={<CharacterPage genero="Female"/>}/>
          <Route path="/about/:id" element={<AboutPage/>}/>
          <Route path="/details" element={<Detalle />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App