import styled from "styled-components";

export const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100%;
@media(max-width: 1375px){
    left: 0px;
    width: 100%;
}
@media(max-width: 414px){
    top: 30px;
}
`
export const BorderWhite = styled.div`
font-size: 22px;
font-weight: 500;
line-height: 35px;
background-color: #fff;
opacity: 1;
padding : 15px;
color: #333;
border-radius: 10px 10px 10px 10px;
&:hover{
    opacity: 1;
}
@media(max-width: 1162px){
    font-size: 17px;
}
@media(max-width: 1054px){
    line-height: 30px;
}
@media(max-width: 995px){
    line-height: 25px;
}
@media(max-width: 375px){
    font-size: 15px;
 }
`

export const CursusAbout = styled.p`
text-align: center;
`
export const TitleAbout = styled.h1`
 text-align: center;
`
export const PlaceAbout = styled.p`
text-align: center;
`
export const DateAbout = styled.p`
opacity: 0.7;
text-align: center;
`
export const Ul = styled.ul`
display: grid;
grid-template-columns: repeat(1, 3fr);
`
export const Li = styled.li``
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