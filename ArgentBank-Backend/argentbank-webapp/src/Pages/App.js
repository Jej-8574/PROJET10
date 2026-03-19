import './main.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Features from '../components/features';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
