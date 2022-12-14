import styled from "styled-components";

export const Div = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
width: 100%;
position: relative;
left: 100px;
`
export const P = styled.p`
font-size: 22px;
width: 50%;
font-weight: 500;
line-height: 35px;
position: relative;
left: 15%;
bottom: 2%;
background-color: #333;
padding : 15px;
color: #eee;
border-radius: 10px 10px 10px 10px;
`
export const Img = styled.img`
    height: 500px;
    position: relative;
    top: 75px;
    right: 200px;
    border-radius: 10px 10px 10px 10px;
`