import styled from "styled-components";

export const ContainerProjects = styled.div`
margin-top: 100px;
margin-bottom: 100px;
margin-left: 20px;
margin-right: 20px;
`
export const Div = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`
export const DivBlock = styled.div`
padding: 15px;
border-radius: 10px 10px 10px 10px;
width: 100%;
margin-bottom: 35px;
&:hover{
    opacity: 1;
}
`
export const H1 = styled.h1`
    text-align: center;
    color: black;
    font-size: 30px;
    padding-bottom: 50px;
    @media(max-width: 499px){
        font-size: 20px;
    }
`
export const P = styled.p`
color: black;
font-size: 25px;
padding: 10px;
text-align: center;
line-height: 35px;
padding-bottom: 50px;
@media(max-width: 499px){
    font-size: 20px;
}
@media(max-width: 414px){
    line-height: 25px;
}
@media(max-width: 403px){
    font-size: 20px;
    line-height: 25px;
}   
@media(max-width: 254px){
    font-size: 18px;
}
`