import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Key from "./Key";
import { AnimatePresence } from "framer-motion";
import About from "./About";
function Pages() {  
  const location = useLocation()
  const check = localStorage.getItem('apiKey');
  return (
    <AnimatePresence mode="wait">
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={check ? <Home /> : <Key />} />
        {/* <Route path="/key" element={<Key />} /> */}
        <Route path="/cuisine/:type" element={<Cuisine />} />        
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>



  )
}

export default Pages