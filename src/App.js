import React, { Component } from 'react';

///COMPONENTS
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomeSlider from './components/slider/slider';
import HomePage from './components/pages/home';
//import Header from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <HomeSlider />
          <HomePage />
          <Footer />
      </div>
    );
  }
}

export default App;
