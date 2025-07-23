import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    width: 100%;
    height: 100vh
`

export const ContainerTask = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    border: 1px solid #0591fc4b;
    border-radius: 10px;
    padding: 10px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
`

export const IconsDiv = styled.div`
    display: flex;
    gap: 15px;
`

export const Links = styled(Link)`
    text-decoration: none;
    color: #000;
`