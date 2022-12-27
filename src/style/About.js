import styled from "styled-components";

export const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 80%;
top: 320px;
left: 220px;
@media(max-width: 1375px){
    left: 0px;
    width: 100%;
}
@media(max-width: 414px){
    top: 30px;
}
`
export const P = styled.p`
font-size: 22px;
width: 100%;
font-weight: 500;
line-height: 35px;
background-color: #fff;
opacity: 0.7;
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
export const Img = styled.img`
    min-height: 500px;
    max-width: 100%;
    padding-right: 200px;
    border-radius: 10px 10px 10px 10px;
    @media(max-width: 1492px){
        min-height: 300px;
        padding-top: 150px;
        min-width: 300px;
        max-width: 100%;
    }
    @media(max-width: 963px){
        padding-right: 100px;
    }
    @media(max-width: 838px){
        padding-right: 50px;
    }
    @media(max-width: 653px){
        padding-top: 0px;
        padding-right: 0px;
        width: 100%;
        padding-left: 3%;
    }
    @media(max-width: 497px){
        min-height: 300px;
    }
    @media(max-width: 414px){
        min-height: 200px;
    }
    @media(max-width: 375px){
        height: 50px;
    }
`