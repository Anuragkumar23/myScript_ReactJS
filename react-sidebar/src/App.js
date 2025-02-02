import {Routes, Route, Link } from 'react-router-dom' ;

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



export default function App() {
  return (
    <>
    <div id = "side">
      <sidebar>
        <ul>
          <li><Link to="/home" className='link'>Home</Link></li>
          <li><Link to="/about" className='link'>About</Link></li>
          <li><Link to="/contact" className='link'>Contact</Link></li>
        </ul>
      </sidebar>
    </div>

    <div id = "route">
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact" element ={<Contact/>}/>
      </Routes>
    </div>
    </>
  );
}


