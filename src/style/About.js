import styled from "styled-components";

export const Div = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
width: 80%;
position: relative;
top: 100px;
left: 100px;
gap: 200px;
@media(max-width: 1349px){
    gap: 100px;
}
@media(max-width: 1224px){
    gap: 50px;
}
@media(max-width: 775px){
    left: 20px;
    width: 90%;
}
@media(max-width: 689px){
    width: 95%;
}
@media(max-width: 653px){
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    left: 0px;
}
@media(max-width: 414px){
    top: 30px;
}
@media(max-width: 375px){
   gap: 0px;
}
`
export const P = styled.p`
font-size: 22px;
width: 100%;
font-weight: 500;
line-height: 35px;
background-color: #333;
padding : 15px;
color: #eee;
border-radius: 10px 10px 10px 10px;
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