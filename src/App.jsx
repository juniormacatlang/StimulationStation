import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Games from "./components/Games/Games"
import Feedback from "./components/Feedback/Feedback"
import Fidgets from "./components/Fidgets/Fidgets"
import Menu from "./components/Menu/Menu"

import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home/>
        <Games/>
        <Fidgets/>
        <Feedback/>
      </div>
    </div>
  );
}

export default App;
