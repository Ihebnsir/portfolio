import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillBridgeProject from './pages/SkillBridgeProject';
import TunisieTelecomExperience from './pages/TunisieTelecomExperience';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/skillbridge" element={<SkillBridgeProject />} />
          <Route path="/experience/tunisie-telecom" element={<TunisieTelecomExperience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
