import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../Paginas/HomePage/Home"
import Detalhes from "../Paginas/DetalhesPage/Detalhes"
import Pokedex from "../Paginas/PokedexPage/Pokedex"
import PagNotFound from "../Paginas/PagNotFound/PagNotFound"



const Rotas = () => {

    return (

     
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/detalhes/:nomePokemon" element={<Detalhes/>}/>
      <Route path="/pokedex" element={<Pokedex/>}/>
      <Route path="*" element={<PagNotFound/>}/>
      </Routes>
      </BrowserRouter>
    
        
  
        )
  }
  
  export default Rotas