import React from 'react'
import HeaderStyled from "./Header.Styled"
import LogoPokemon from "../../imagens/LogoPokemon.svg"
import { useNavigate, useLocation } from 'react-router-dom'
import { gotoHome, gotoPokedex } from '../../Rotas/coordenation'



const Header = () => {


  const navigate = useNavigate()
  const local = useLocation()

  const Headers = () => {

    switch (local.pathname) {
      case "/":
        return (
          <div className='header-container'>
            <div className='LogoPoke1'>
              <img src={LogoPokemon} alt="Logo pokemon"></img>
            </div>
            <div className='botao-dex'>
              <button onClick={() => gotoPokedex(navigate)}><h2>Pokedex</h2></button>
            </div>

          </div>
        )
      case "/pokedex":
        return (
          <div className='header-containeres'>
            <div className='botao-todos'>
              <a onClick={() => gotoHome(navigate)}><h2> Todos os Pokemons</h2></a>
            </div>
            <div className='LogoPoke'>
              <img src={LogoPokemon} alt="Logo pokemon"></img>
            </div>

          </div>
        )
      case "/detalhes/":
        return (
          <div className='header-container'>
            <div>
              <a onClick={() => gotoHome(navigate)}><h1>Todos os Pokemons</h1></a>
            </div>
            <div className='LogoPoke'>
              <img src={LogoPokemon} alt="Logo pokemon"></img>
            </div>

          </div>
        )
      default:
        return (
          <div className='header-container1'>
            <div>
              <a onClick={() => gotoHome(navigate)}><p>Todos os Pokemons</p></a>
            </div>
            <div className='LogoPoke'>
              <img src={LogoPokemon} alt="Logo pokemon"></img>
            </div>

          </div>
        )
    }
  }
  return (
    <HeaderStyled>
      {Headers()}
    </HeaderStyled>
  )

}

export default Header