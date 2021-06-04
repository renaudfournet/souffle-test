import React from 'react'
import first from '../../images/Souffle_AD_2.jpg'

function First() {
  return (
    <>
      <h2 style={{ color: '#FA5C26', marginTop: '50px' }}>1</h2>
      <h3 style={{ color: '#1408D4', marginLeft: '230px', marginRight: '230px', marginTop: '20px', fontSize: '30px' }}>VOUS ECOUTER POUR DESIGNER LES MEILLEURS PRODUITS</h3>
      <div style={{ color: '#1408D4', marginLeft: '230px', marginRight: '230px', marginTop: '20px', marginBottom: '30px' }}>
        <p>Nous avons passé notre premier confinement à parler avec des centaines de clients pour comprendre votre relation avec la cuisine. Comprendre aussi votre relation avec vos ustensiles et essayer de savoir ce que vous attendiez.</p>
        <p>Votre réponse : mieux avec moins.</p>
        <p>
          En moyenne, c'est presque 10 poêles et casseroles rangées au fond de vos placards, pour n'en utiliser que 4. Notre équipe de designers industriels a ensuite mis au point une offre répondant à vos exigences de polyvalence, de sécurité et
          d'innocuité alimentaire.
        </p>
      </div>
      <img style={{ width: '100%' }} src={first} alt="first" />
    </>
  )
}

export default First
