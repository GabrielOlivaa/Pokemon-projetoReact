import styled from "styled-components"

export const HomePageStyle = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
height: 100%;

.back-ground{
    background: #5E5E5E;
}
.container{
    margin-left:40px;  
    margin-bottom:60px;
    margin-top: 60px;
}
h1{
margin-bottom:28px;
color:white;
font-family: 'Poppins';
font-size: 42px;


}
.pokeList{
    display:flex;
    flex-wrap:wrap;
    margin-bottom: 100px;  
    background-color: #5E5E5E;
    

}
`
export default HomePageStyle