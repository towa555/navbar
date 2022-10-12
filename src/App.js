import Navbar from './navbar'
import Pricing from './pages/pricing'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import './App.css';
import { Route,Routes } from "react-router-dom"

function App() {
return(
    <>
<Navbar/>
<div className="container">
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
</Routes>
</div>
</>
)
}

export default App;
