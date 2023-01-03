import styled from "styled-components";

export const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: auto;
margin-top: 100px;
margin-bottom: 100px;
@media(max-width: 1375px){
    left: 0px;
    width: 100%;
}
@media(max-width: 859px){
    width: 91%;
}
@media(max-width: 414px){
    top: 30px;
}
@media(max-width: 285px){
    width: 90%;
}
`
export const BorderWhite = styled.div`
font-size: 22px;
font-weight: 500;
background-color: #fff;
opacity: 1;
padding : 15px;
color: #333;
height: 690px;
border-radius: 10px 10px 10px 10px;
&:hover{
    opacity: 1;
}
@media(max-width: 745px){
    height: auto;
    position: relative;
    right: 2%;
}
@media(max-width: 695px){
    right: 3%;
}
@media(max-width: 611px){
    right: 4%;
}
@media(max-width: 485px){
    right: 5.5%;
}
@media(max-width:427px){
    right: 7%;
}
@media(max-width:427px){
    right: 7%;
}
@media(max-width:287px){
   width: 85%;
}
@media(max-width:255px){
    font-size: 18px;
    
}
`
export const DivFormation = styled.div`
display: flex;
flex-direction: column;
`
export const CursusAbout = styled.p`
text-align: center;
`
export const TitleAbout = styled.h1`
 text-align: center;
 padding-bottom: 20px;
`
export const PlaceAbout = styled.p`
text-align: center;
`
export const DateAbout = styled.p`
opacity: 0.7;
text-align: center;
padding-bottom: 5px;
padding-top: 5px;
`
export const CardsContainer = styled.div`

`
export const Ul = styled.ul`
display: inline-block;
width: 30%;
@media(max-width: 1785px){ 
    display: inherit;
    width: 100%;
}
`
export const Li = styled.li`
display: grid;
@media(max-width: 731px){ 
    width :100%;
}
`
export const DateAndIndication = styled.div`
display: flex;
padding: 15px;
`
export const Date = styled.p`
margin-right: 10px;
font-style: italic;
opacity: 0.6;
`
export const Indication = styled.p`
margin-left: 5px;
margin-right: 10px;
`