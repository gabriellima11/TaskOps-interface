import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 100vh;
    width: 320px;
    border-right: 1px solid #0591fc18;
    padding: 20px;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    .admin {
  position: relative;
  cursor: pointer;
  padding-right: 20px;
}

.admin::after {
  content: '▼';
  position: absolute;
  right: 5px;
  font-size: 0.8em;
  transition: transform 0.2s ease;
}
`

export const ListLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 5px 10px;
    border-radius: 20px;
    gap: 20px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    background-color: #0593FC;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: #077cd6ff;
    }
    
`

export const DivAdmin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`