import styled from "styled-components";
import pokeBola from "../../imagens/pokeBola.png"

export const DetalhesStyle = styled.section`
display:flex;
flex-direction:row;
height: 800px;
width:100px;

h1{

color:white;
font-family: 'Poppins';
font-size: 44px;
font-weight: 700;
margin-left: 40px;
margin-top:60px;
margin-bottom:60px;
}
.card-1{
    >h2{
font-family: Inter;
font-size: 48px;
font-weight: 700;
color:white
}
    >p{

font-weight: 700;
color:white;

    }

}
.container{
height: 900px;
width: 1700px; 
padding:24px;
background-color :#5D5D5D ;

}
.cardzao{
display:flex;
flex-wrap:wrap;
width:1600px;
height:600px;

padding-top:24px;
padding-bottom: 24px;
margin-left: 8px;
margin-bottom: 100px;
border-radius:36px;
background-color:${(props) => props.color};

}

.imagens-poke{
    display:flex;
    flex-direction: column;
    margin-left:24px;
    margin-right:4px;
    gap:32px;
    width:350px;
    
}
.poke-frente{
    background-color:white;
    width:280px;
    height:250px;
    border-radius:16px;
  
   
}
.centraliza-superior{
        width:280px;
        height:100%;
         display:flex;
        align-items:center;
        justify-content:center;
}

.poke-tras{
    background-color:white;
    width:280px;
    height:250px;
    border-radius:16px;
  
}
.img-poke{
    width: 500px;
    height: 400px;
}

.img-poke12{
    width:280px;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    
    }
.dados{
height: 513px;
width: 343px;
left: 360px;
border-radius: 12px;
background-color:white;
width:33%;


}
.dados-poke{
margin-left:68px;
width:320px;


}

.pokebola{
    position:absolute;
    z-index:0 ;
    
}   

.movesBox{
position:absolue;
height: 380px;
width: 280px;
border-radius: 12px;
background-color:white;
padding-left: 18px;
display:flex;
flex-direction:column;
}

.pokeimg{
height: 270px;
width: 270px;
left: 1309px;
top: 216px;
position:absolute;
}

.tp-poke{
    margin-top: 12px;
    margin-bottom: 38px;
    display:flex;
    gap:18px;
    z-index:1;
    position:relative;
}

.moves-balao{
    width:400px;
    >p{
font-family: 'Inter';
font-size: 24px;
font-weight: 800;
padding:18px;
}
}
.box-caracteristicas{
   display:flex;
   align-items:center;
   padding-bottom: 12px;
   flex-wrap: wrap;
   font-family: 'Inter';
   >span{
    padding-right: 4px;
   }
  }
.cor-de-fundo{
    width:40%;
    background-color: #CFCFCF;
    border-radius: 24px;
    padding:8px;
    border: dashed 1px gray;
    >span{
        padding-left: 4px;
        
    }
}
.moves-atk{
display:flex;
flex-direction: column;
gap:20px;
height: 37px;
border-radius: 12px;
padding: 10px;
border-radius: 12px;

}
.total{
    display:flex;
    >span{
        padding-left: 4px;
        font-weight: bold;
    }
}
`
export default DetalhesStyle 