import React from 'react'
import header from '../images/Souffle_AD_7.jpg'

function Header() {
  return (
    <div>
      <img style={{ width: '100%' }} src={header} alt="Logo" />
      <h2 style={{ position: 'absolute', top: '200px', left: '100px' }}>
        <span>Some Text</span>
      </h2>
    </div>
  )
}

export default Header
