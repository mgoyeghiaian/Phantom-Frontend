import React from 'react'
import './Sponsored.css'
import Binance from '../../../../assets/sponsored/Binance.svg'
import Ethereum from '../../../../assets/sponsored/Ethereum.svg'
import Blockchain from '../../../../assets/sponsored/Blockchain.svg'


function Sponsored() {
  return (
    <div className='sponsord-body'>
      <img src={Binance} />
      <img src={Ethereum} />
      <img src={Blockchain} />
    </div>
  )
}

export default Sponsored