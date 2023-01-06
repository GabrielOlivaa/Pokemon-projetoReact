import React from 'react'
import axios from "axios"
import Rotas from "./Rotas/Rotas"
import { GlobalStyle } from './GlobalStyle'
import { useEffect, useState } from "react"
import { GlobalContext } from './Context/GlobalContext'


const App = () => {
  const [resposta, setResposta] = useState([])
  const [arrayPokedex, setArrayPokedex] = useState([])

  useEffect(() => {
    listaPokemons()

  }, [])

  const listaPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setResposta(res.data.results))
      .catch((err) => console.log(err))

  }

  const context = {
    resposta, setResposta,
    arrayPokedex, setArrayPokedex,
    listaPokemons,

  }
  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={context} >
        <Rotas />
      </GlobalContext.Provider>
    </>
  )
}

export default App