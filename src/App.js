// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;


import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Intro from './Components/Intro';
import BuyerInfo from './Components/BuyerInfo';
import HowItWorks from './Components/HowItWorks';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <BuyerInfo />
      <Banner />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
