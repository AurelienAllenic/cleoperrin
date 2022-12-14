import styled from "styled-components";

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
position: relative;
bottom: 60px;
flex-direction: column;
width: 100%;
height: 82vh;
`
export const InputDiv = styled.div`
`
export const Input = styled.input`
margin: 10px;
width: 300px;
height: 50px;
border-top: none;
border-left: none;
border-right: none;
background-color: transparent;
font-size: 25px;
&::placeholder{
    color: black;
}
&:hover{
    border-bottom: 3px solid white;
    cursor: pointer;
    &::placeholder{
        color: white;
    }
}
&:focus{
    outline: none;
}
`
export const Textarea = styled.textarea`
width: 30%;
height: 300px;
margin-top: 25px;
margin-bottom: 25px;
border-radius: 10px 10px 10px 10px;
resize: none;
font-size: 25px;
background-color: transparent;
border: 2px solid black;
&::placeholder{
    color: black;
    text-align: center;
}
&:hover{
    border: 2px solid white;
    cursor: pointer;
    &::placeholder{
        color: white;
    }
}
`
export const Button = styled.button`
width: 10%;
height: 50px;
border-radius: 10px 10px 10px 10px;
border-top: none;
border-left : none;
border-right: none;
border-bottom: 1px solid black;
background-color : transparent;
font-size: 20px;
&:hover{
    border-bottom: 2px solid white;
    cursor: pointer;
    font-weight: 600;
}
`
export const Footer = styled.footer`
background-color: white;
width: 100%;
height: 50px;
position: fixed;
bottom: 0%;
display: grid;
grid-template-columns: repeat(2, 1fr);
`
export const PhoneNumber = styled.a`
    font-size: 25px;
    position: absolute;
    bottom: 20%;
    text-decoration: none;
    color: black;
    &:hover{
        font-weight: 500;
        cursor: pointer;
    }
`
export const Icons = styled.div`
gap: 40px;
position: absolute;
bottom: 0%;
right: 0%;
`
export const SpanIcon = styled.a`
font-size: 35px;
margin: 5px;
color: black;
&:hover{
    font-size: 37px;
}
`