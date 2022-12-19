import React from 'react';
import 'tailwindcss/tailwind.css';
import Nav from './Nav';
import Cart from './Cart';
import Menu from './Menu';
import Footer from './Footer';
import Feature from './Feature';
import Test from './Test';

function App() {
  return (
    <div>
      <Nav />
      <Test />
      <Cart />
      <Menu />
      <Feature />
      <Footer />


      {/* <Hero />
        <Features />
        <Footer /> */}
    </div>
  );
}

export default App;
