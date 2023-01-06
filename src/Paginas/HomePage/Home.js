import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import Pokecard from '../../coomponents/PokeCard/PokeCard.js'
import HomePageStyle from './HomePage.styled.js'
import Header from "../../coomponents/Header/Header"


const Home = () => {

  const context = useContext(GlobalContext)

  const { resposta,
    todosPokemons,

  } = context


  return (

    <HomePageStyle>
      <Header />
      <div className='back-ground'>
        <div className='container' >
          <h1>Todos os Pokemons</h1>
        </div>
        <div className='pokeList' >
          {resposta.map((propsPokemon) => {
            return (<Pokecard todosPokemons={todosPokemons}
              propsPokemon={propsPokemon}
            />)

          })}
        </div>
      </div>

    </HomePageStyle>

  )
}
export default Home