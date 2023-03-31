import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import CoinDetails from './components/CoinDetails';
import Coin from './components/Coins';
import Exchanges from './components/Exchanges';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
  <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coins" element={<Coin/>}/>
          <Route path="/coin/:id" element={<CoinDetails/>} />
          <Route path="/exchanges" element={<Exchanges/>} />

        </Routes>
        <Footer/>
      </Router>

  )
}

export default App