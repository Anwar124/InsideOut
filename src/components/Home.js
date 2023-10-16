import React from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import Boxes from './Boxes';
import Footer from './Footer';
import Services from './Services';
import Testimonials from './Testimonials';
import '../CssFolder/App.css';

function Home() {
  return (
  
    <div className="home-container">
      
      <Header />
      <Slideshow />
      <Services />
      <Testimonials />
      <Boxes />
      <Footer />
    </div>
  );
}

export default Home;
