import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <VideoSection />
      <Services />
      <Team />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
