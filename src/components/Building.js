import React from 'react';
import Header from './Header';
import BoxesBuilding from './BoxesBuilding';
import Footer from './Footer';

function Building() {
  return (
    <div className="building-container">
      <Header />
      <BoxesBuilding />
      <Footer />
    </div>
  );
}

export default Building;
