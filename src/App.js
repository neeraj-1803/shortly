import './App.css';
import Boost from './collections/boost/Boost';
import Footer from './collections/footer/Footer';
import HeroContainer from './collections/hero/HeroContainer';
import Navbar from './collections/navbar/Navbar';
import ShortenURL from './collections/shortenurl/ShortenURL';
import Stats from './collections/stats/Stats';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContainer />
      <ShortenURL />
      <Stats />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
