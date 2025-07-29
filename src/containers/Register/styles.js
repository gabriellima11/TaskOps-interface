import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ContainerInput = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 10px;
`

export const ContainerSelect = styled.div`
   display: flex;
   align-items: center;
   gap:10px
`

export const Input = styled.input`
   border-radius: 10px;
   border: 1px solid black;
   padding: 5px 10px;
`

export const TextArea = styled.textarea`
   border-radius: 10px;
   border: 1px solid black;
   padding: 5px;
   resize: none;
`

export const Select = styled.select`
   margin-top: 10px;
   border-radius: 10px;
   border: 1px solid black;
   padding: 5px;
   resize: none;
   width: 12em;
`

export const Button = styled.button`
   width: 12em;
   padding: 10px;
   background-color: #0593FC;
   color: #ffffff;
   border: none;
   border-radius: 10px;
   font-weight: 500;

   &:hover{
        background-color: #077cd6ff;
    }
`