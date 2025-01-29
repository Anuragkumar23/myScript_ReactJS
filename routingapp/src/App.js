import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
    <h1>Learning Routing with Components (/home, /Contact, /about)</h1>
    <Routes>
    <Route path = '/home' element = {<Home/>}/>
    <Route path = '/about' element = {<About/>}/>
    <Route path = '/contact' element = {<Contact/>}/>
    </Routes>
   
    </>
  )
}