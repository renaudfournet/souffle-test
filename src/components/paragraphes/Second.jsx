import header from '../../images/Souffle_AD_2.jpg'

function Second() {
  return (
    <>
      <h3 style={{ color: '#FA5C26' }}>2</h3>
      <span style={{ color: '#1408D4', fontWeight: 'bold' }}>CHOISIR LES MATERIAUX LES PLUS NOBLES ET PRODUIRE EN FRANCE</span>
      <p>
        Les plus beaux produits de notre terroir méritent d'être cuisinés dans des ustensiles de grande qualité. C'est la raison pour laquelle nous avons noué un partenariat avec un fabricant historique de la région vosgienne pour vous proposer des
        produits faits pour la vie, à la qualité irréprochable.
      </p>
      <p>Et comme redynamiser le tissu industriel français est au coeur de notre stratégie, nous sommes parmi les seuls à fabriquer l'ensemble des composants de nos produits en France.</p>
      <img style={{ width: '100%' }} src={header} alt="Logo" />
    </>
  )
}

export default Second
