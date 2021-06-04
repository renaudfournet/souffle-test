import React from 'react'
import first from '../../images/Souffle_AD_2.jpg'

function First() {
  return (
    <>
      <h2 style={{ color: '#FA5C26', marginTop: '50px' }}>2</h2>
      <h3 style={{ color: '#1408D4', marginLeft: '230px', marginRight: '230px', marginTop: '20px', fontSize: '30px' }}>CHOISIR LES MATERIAUX LES PLUS NOBLES ET PRODUIRE EN FRANCE</h3>
      <div style={{ color: '#1408D4', marginLeft: '230px', marginRight: '230px', marginTop: '20px', marginBottom: '30px', fontFamily: 'Copernicus' }}>
        <p>
          Les plus beaux produits de notre terroir méritent d'être cuisinés dans des ustensiles de grande qualité. C'est la raison pour laquelle nous avons noué un partenariat avec un fabricant historique de la région vosgienne pour vous proposer des
          produits faits pour la vie, à la qualité irréprochable.
        </p>
        <p>Et comme redynamiser le tissu industriel français est au coeur de notre stratégie, nous sommes parmi les seuls à fabriquer l'ensemble des composants de nos produits en France.</p>
      </div>
      <img style={{ width: '100%', paddingRight: '30px', paddingLeft: '30px' }} src={first} alt="first" />
    </>
  )
}

export default First
