import styled from "styled-components";

export const PokeCardStyle = styled.div`
display:flex;
height: 210px;
width: 370px;
margin-left: 14px;
margin-bottom: 56px;
border-radius: 12px;
background-color:${(props) => props.color};
color:white;
position:relative;
.le{
    display:flex;
    flex-direction:column;
    margin-left: 24px;
    margin-top:24px;
    font-family: 'Inter';
    
}
.lei{
font-weight: 700;
margin-top:4px;
margin-bottom:12px;
} 


.tipo{
    display:flex;
    
}
.detalhes{
    width: 220px;
    padding-top:20px;
    text-decoration:underline;
    margin-top:auto;
    margin-bottom: 12px;
    cursor:pointer;
    }
   
 


.ld{
    display:flex;
    flex-direction:column;
    left:44px;
    margin-left:auto;   
  }
.pkname{
position: absolute;
width: 140px;
height: 193px;
right:4px;
top: -52px;
z-index:1;
}
.pkbola{
z-index:0;
position: absolute;
right:-36px;
top: -52px;
}

button{
position:absolute;
margin-top: 164px;
margin-left: 8px;
z-index:1;
height: 36px;
width: 100px;
border-radius: 8px; 
padding: 4px 8px;
border:none;
cursor:pointer;




}


`

export default PokeCardStyle