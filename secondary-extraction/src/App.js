
import './App.css';
import Home from './Home';
import About from './About';
import VisionMission from './VisionMission';
import Services from './Services';
import Challenges from './Challenges';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#vision-mission">Vision & Mission</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#challenges">Challenges</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <Home />
      <About />
      <VisionMission />
      <Services />
      <Challenges />
      <Contacts />
      <footer>
        <p>&copy; 2025 Center for Secondary Extraction. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
