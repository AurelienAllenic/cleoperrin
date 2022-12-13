import styled from "styled-components";

export const EntireNav = styled.nav`
height: auto;
position: fixed;
width: 100%;
background-color: white;
z-index: 100;
box-shadow: 1px 1px 1px 1px;
`
export const Ul = styled.ul`
display: flex;
flex-direction: row;
gap: 12%;
margin-left: 2%;
list-style: none;
`
export const Li = styled.li`
font-size: 25px;
&:hover{
    font-weight: 500;
    cursor: pointer;
}
`