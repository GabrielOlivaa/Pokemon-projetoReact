import styled from 'styled-components'

const HeaderStyled = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
width:100%;
height:25vh;
.header-container{
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
padding:36px;
}


.header-container1{
display:flex;
justify-content:space-between;
align-items:center;
padding: 8px;
width: 1700px;

}

.LogoPoke{
width:65%;
display:flex;
align-items:center;
justify-content:center;
margin-right: 200px;
}

.LogoPoke1{
width:65%;
display:flex;
align-items:center;
justify-content:center;
margin-left: 180px;
}

.ExcluirPoke{
    width:260px;
    height: 60px;
    margin-right: -200px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

}
.ExcluirPoke1{
    width:100x;
    height: 60px;
    margin-left:1px ;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    color: white;
    border: 1px solid red;

}

a{
    font-family: 'Inter';
    text-decoration: underline;
    cursor: pointer;
}

p{
    font-size: 36px;
    font-size: large;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif   ;
}

.header-containeres{
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
padding:26px;
height: 200px;
    
}

.botao-todos{
    padding: 20px;
    width: 300px;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}

.botao-dex{ 
    width:30%;
    
    >button{
    background: #33A4F5;
    color:white;
    border-radius: 8px;
    border:none;
    padding:19px 72px;
    cursor:pointer;
    margin-left: 140px;

    }
}
`

export default HeaderStyled