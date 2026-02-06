import Home from './components/Home/Home.jsx'
import Booking from './components/Booking/booking.jsx'
import Search from './components/Search/search.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About.jsx';
import Details from './components/Product/Details.jsx';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/search' element={<Search />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/booking' element={<Booking/>}/>
          
        </Routes>
      </BrowserRouter>    
     
      
    </>
    
  )
}

export default App
