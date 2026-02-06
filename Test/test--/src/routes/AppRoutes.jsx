import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"

export default function AppRoutes(){
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/About" element={<About />}/>
    </Routes>
   
}
