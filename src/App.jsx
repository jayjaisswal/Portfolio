
import Nav from "./components/Nav"
import MySkills from "./components/MySkills"
import Home from './components/Home'
import Education from "./components/Education"
import MyProjects from "./components/MyProjects"
import MyInvolvement from "./components/MyInvolvement"
import Contact from "./components/Contact"
// import VeiwAnimation from "./animations/veiwAnimation"
function App() {
  

  return (
    <>
    <Nav/>
    <Home/>
    <MySkills/>
    <Education/>

    {/* <Education/> */}
    <MyProjects/>
     <MyInvolvement/> 
    <Contact/>
    </>
  )
}

export default App
