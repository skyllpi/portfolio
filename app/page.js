import Navbar from './components/navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';


export default function Home() {
  return (
    <>
    <Header/>
    <About/>
    <Experience/>
    <Education/>
    <Projects/>
    <Contact/>
    <Navbar/>
    </>
  );
}
