import './App.css';
import About from './components/About';
import Certifications from './components/certifications/Certifications';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;
