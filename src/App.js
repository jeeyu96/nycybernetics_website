import React from 'react';
import Header from "./component/Header";
import Banner from "./component/Banner";
import Logos from './component/Logos';
import Aboutus from './component/Aboutus'; 
import Wedo from './component/Wedo';
import Services from './component/Services';
import ServiceText from './component/ServiceText';
import Testimonials from './component/Testimonials';
import Subscribe from './component/Subscribe';
import Footer from './component/Footer';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Logos />
      <Aboutus />
      <Wedo />
      <Services />
      <ServiceText />
      <Testimonials />
      <Subscribe />
      <Footer />
    </React.Fragment>
  );
}

export default App;
