import { Route, Routes, Navigate, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


export default function App() {
  return (
    <>
    <h1>Routing with Components</h1>
    {/* <h1>Learning Routing with Components (/home, /Contact, /about)</h1> */}
    <nav>
      <ul>
        <li><Link to ="/home">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path='/' element = {<Navigate to = "/home"/>}/>
      <Route path = '/home' element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
    </Routes>
   
    </>
  )
}