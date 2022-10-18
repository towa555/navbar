import Navbar from './navbar'
import About from './pages/login'
import Contact from './pages/signin'
import Home from './pages/signin'
import './App.css';
import { Route,Routes } from "react-router-dom"

function App() {
return(
    <>
<Navbar/>
<div className="container">
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
</Routes>
</div>
</>
)
}

export default App;
