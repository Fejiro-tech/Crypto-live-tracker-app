import React, { useEffect, useState } from 'react';
import './../CSS/crypto.css';
import Navbar from './Navbar';
import bitcoin from './../assets/bitcoin.png';
import ethereum from './../assets/ethereum.png';
import dogecoin from './../assets/dogecoin.png';


const Crypto = () => {

  const [coinRate, setCoinRate] = useState({});

  async function CryptoPrices() {
    
    const coinUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

    try {
      
      const res = await fetch(coinUrl);
      const data = await res.json();

      console.log(data);

      setCoinRate ({
        bitcoin: data.bitcoin.usd,
        ethereum: data.ethereum.usd,
        dogecoin: data.dogecoin.usd,
      })

    } catch (error) {
      console.error("Error fetching rates", error)
    }
  }

  const formatPrice = (price) => {
    if (!price) return '--';
    return price.toLocaleString('en-US', { minimumFractionDigits: 2 });
  };

  useEffect(() => {
    CryptoPrices()

    const interval = setInterval(CryptoPrices, 60000);
    return () => clearInterval(interval)
    
  }, [])



  return (
    <div className='main'>
      <Navbar />

      <div className='content'>
        <h1>BUY & <br/> SELL <span>Crypto</span></h1>

        <p className="indicator">
          <span className="live-indicator"></span> 
          <span className="live-text">
            Stay ahead of the market with our <strong>live crypto tracker</strong>. <br/>
            Get real-time prices for <strong>Bitcoin</strong>, <strong>Ethereum</strong>, <strong>Dogecoin</strong> and more — updated every second.
          </span>
        </p>

        <a href="#" className="button">EXPLORE NORE</a>   
      </div>

      <div className='coin-list'>
        <div className='coin'>
          <img src={bitcoin} alt="" />

          <div>
            <h3>$ {formatPrice(coinRate.bitcoin)}<span id="bitcoin"></span></h3>
            <p>Bitcoin</p>
          </div>
        </div>

        <div className='coin'>
          <img src={ethereum} alt="" />

          <div>
            <h3>$ {formatPrice(coinRate.ethereum)}<span></span></h3>
            <p>Ethereum</p>
          </div>
        </div>

        <div className='coin'>
          <img src={dogecoin} alt="" />

          <div>
            <h3>$ {formatPrice(coinRate.dogecoin)}<span id="bitcoin"></span></h3>
            <p>Dogecoin</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Crypto