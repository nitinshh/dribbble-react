// import { Route, Routes } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Projects from './components/Projects'
// import Resume from './components/Resume'
// import Jewelry from './components/Jewelry'
// import Contact from './components/Contact'


export default function App() {
 return (
   <>
     <Navbar />
       <Routes>
         {/* <Route path="/"  element={<Home />} />
         <Route path="/About"  element={<About/>} />
         <Route path="/Projects"  element={<Projects/>} />
         <Route path="/Resume"  element={<Resume/>} />
         <Route path="/Jewelry"  element={<Jewelry />} />
         <Route path="/Contact"  element={<Contact/>} /> */}
       </Routes>
   </>
 )
}