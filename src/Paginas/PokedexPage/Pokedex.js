import React, { useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import Header from "../../coomponents/Header/Header"
import Pokecard from  "../../coomponents/PokeCard/PokeCard"
import PokedexStyle from './Pokedex.Styled'


const Pokedex = () => {

  const context = useContext(GlobalContext)

  const { 
    arrayPokedex } = context

  console.log(arrayPokedex)
  return (

    <PokedexStyle>
      <Header />
    
      <div>
        <div className='container'>
        
        </div>
        <div className='pokeLista' >
        <h1 className='namePoke'>Meus Pokemons</h1>
          {arrayPokedex.map((propsPokemon) => {
            return (<Pokecard
              propsPokemon={propsPokemon}
            />)

          })}
        </div>
      </div>

    </PokedexStyle>

  )
}
export default Pokedex 