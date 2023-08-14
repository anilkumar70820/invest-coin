import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InvestCoin from './components/InvestCoin'
import OurSites from './components/OurSites'
import Investments from './components/Investments'
import WriteUs from './components/WriteUs';
import Footer from './components/Footer'
import Hero from './components/Hero';
import Preloader from './components/Preloader';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollButton from './components/ScrollButton';
function App() {
  useEffect(() => {
    AOS.init({ once: true, });
    const preloader = document.getElementById("preloader")
    setTimeout(() => {
      preloader.classList.add("d-none")
      preloader.classList.add("pointer-event-none")
      document.body.classList.remove("overflow-hidden")
    }, 3000)
    document.body.classList.add("overflow-hidden")
  }, [])
  return (
    <>
      <Preloader />
      <ScrollButton />
      <Hero />
      <InvestCoin />
      <OurSites />
      <Investments />
      <WriteUs />
      <Footer />
    </>
  );
}

export default App;
