import styled from "styled-components";

export const Div = styled.div`
position: relative;
height: 60vh;
width: 100%;
top: 25%;
left: 20%;
@media(max-width: 1492px){
    height: 100vh;
}
`
export const DivBlock = styled.div`
padding: 15px;
border-radius: 10px 10px 10px 10px;
width: 60%;
margin-top: 50px;
margin-bottom: 35px;
&:hover{
    opacity: 1;
}
@media(max-width: 1492px){
    width: 70%;
}
@media(max-width: 414px){
    width: 80%;
}
`
export const H1 = styled.h1`
    text-align: center;
    color: black;
    font-size: 30px;
    @media(max-width: 499px){
        font-size: 20px;
    }
    @media(max-width: 403px){
        font-size: 17px;
    }
`
export const P = styled.p`
color: black;
font-size: 20px;
padding: 10px;
text-align: center;
line-height: 35px;
@media(max-width: 499px){
    font-size: 17px;
}
@media(max-width: 414px){
    line-height: 25px;
}
@media(max-width: 403px){
    font-size: 15px;
    line-height: 25px;
}   
@media(max-width: 254px){
    font-size: 13px;
}
`