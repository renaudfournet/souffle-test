import React from 'react'
import first from '../../images/Souffle_AD_2.jpg'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'

function First() {
  return (
    <>
      <h3>1</h3>
      <span>VOUS ECOUTER POUR DESIGNER LES MEILLEURS PRODUITS</span>
      <p>Nous avons passé notre premier confinement à parler avec des centaines de clients pour comprendre votre relation avec la cuisine. Comprendre aussi votre relation avec vos ustensiles et essayer de savoir ce que vous attendiez.</p>
      <p>Votre réponse : mieux avec moins.</p>
      <p>
        En moyenne, c'est presque 10 poêles et casseroles rangées au fond de vos placards, pour n'en utiliser que 4. Notre équipe de designers industriels a ensuite mis au point une offre répondant à vos exigences de polyvalence, de sécurité et d'innocuité
        alimentaire.
      </p>
      <img style={{ width: '100%' }} src={first} alt="first" />
      <Second />
      <Third />
      <Fourth />
    </>
  )
}

export default First
