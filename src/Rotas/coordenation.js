export const gotoHome = (navigate)=>{
    navigate("/")
}

export const gotoDetalhes = (navigate, nomePokemon) => {
navigate(`/detalhes/${nomePokemon}`)
}

export const gotoPokedex =(navigate) =>{
  navigate("/pokedex")
}