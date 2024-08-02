import './App.css'
import Header from './Components/Header'
import Home from './Sections/Home'
import About from './Sections/About'
import Work from './Sections/Work'
import Contact from './Sections/Contact'

function App() {


  return (
    <>
      <div className='app-container'>
         {/* <Sidenav currentSection={currentSection} /> */}
      <Header id="header"/>
      <Home id="home" />
      <About id="about" />
      <Work id="work" />
      <Contact id="contact" />
      {/* <Bio id="bio" />
      <Work id="work" />
      <Projects id="projects" />
      <ContactForm id="contact" /> */}
      </div>
    </>
  )
}

export default App
