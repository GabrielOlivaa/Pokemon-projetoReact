import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'
import { gotoDetalhes } from '../../Rotas/coordenation'
import { cores } from "../../Hooks/Cores"
import { ImgTipo } from '../../Hooks/Tipos'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import pokeBola from "../../imagens/pokeBola.png"
import PokeCardStyle from "./PokeCard.styled"




const Pokecard = (props) => {
  const { propsPokemon } = props

  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState([])
  const [cor, setCor] = useState([])
  const [tipoOn, settipoOn] = useState(false)


  const context = useContext(GlobalContext)

  const location = useLocation()

  const {
    arrayPokedex,
    setArrayPokedex,
  } = context

  useEffect(() => {

    resquisicaoPoke()

  }, [])


  const resquisicaoPoke = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${propsPokemon.name}`)
      .then((res) => {
        setPokemon(res.data)
        settipoOn(true)
        setCor(res.data.types[0].type.name)

      })
      .catch((err) => {
        console.log(err)
      })

  }


  const tipo = () => {
    if (tipoOn && pokemon.types[1]) {
      return (
        <>
          <img src={ImgTipo(pokemon.types[0].type.name)} />
          <img src={ImgTipo(pokemon.types[1].type.name)} />
        </>
      )
    }
    return (
      <img src={ImgTipo(pokemon.types && pokemon.types[0].type.name)} />
    )
  }


  const addPokedex = (pokeadd) => {
    const pokeEmpokedex = arrayPokedex.find((pokemonNaPokedex) => pokemonNaPokedex.name === pokeadd.name)
    if (!pokeEmpokedex) {
      const novoArrayPokedex = [...arrayPokedex, pokeadd]
      setArrayPokedex(novoArrayPokedex)
      alert("pokemon adicionado pokedex")

      localStorage.setItem("pokedex", JSON.stringify(novoArrayPokedex))
    }

  }
  const removeDaPokedex = (removePokemon) => {
    const novoArrayPokedex = arrayPokedex
      .filter((pokemonNaPokedex) => pokemonNaPokedex.name !== removePokemon.name)
    setArrayPokedex(novoArrayPokedex)
    alert("pokemon removido pokedex")

  }

  return (


    <PokeCardStyle color={cores(cor)}>
      <div className='le'>

        <div className='les'>
          <span>{pokemon.id <= 10 ? <p>#0{pokemon.id}</p> : <p>#{pokemon.id} </p>} </span>
          <h1>{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</h1>
        </div>

        <div className='lei'>

          <div className='tipo'>
            <span>{tipo()}</span>

          </div>





          <div className='detalhes'>
            <a onClick={() => gotoDetalhes(navigate, propsPokemon.name)}>Detalhes</a>

          </div>

        </div>


      </div>

      <div className='imagens'>
        <img className='pkname' src={pokemon.sprites?.other['official-artwork'].front_default} alt='ivissaur'></img>
        <img className='pkbola' src={pokeBola} alt='pokebola'></img>
        <div className='botao-cap'>

          {location.pathname === "/" ? (
            <button onClick={() => addPokedex(propsPokemon)}>Capturar</button>)
            :
            (<button onClick={() => removeDaPokedex(propsPokemon)}>Excluir</button>)
          }
        </div>
      </div>



    </PokeCardStyle>



  )
}



export default Pokecard