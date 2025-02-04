import { Route, Routes, Navigate, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'


export default function App() {
  return (
    <>
    <h1 className='heading'>Routing with Components</h1>
    {/* <h1>Learning Routing with Components (/home, /Contact, /about)</h1> */}
    {/* <nav>
      <ul>
        <li><Link to ="/home">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
      </ul>
    </nav> */}
    <Link to ="/home"><button>Home</button></Link>
    <Link to ="/About"><button>About</button></Link>
    <Link to ="/contact"><button>Contact</button></Link>

    <Routes>
      <Route path = '/' element = {<Navigate to = "/home"/>}/>
      <Route path = '/home' element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
    </Routes>
    </>
  )
}