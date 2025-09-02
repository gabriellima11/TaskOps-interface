import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 16px;
  box-sizing: border-box;
`;

export const Table = styled.table`
  width: 100em;
  min-width: 600px;
  border-collapse: collapse;
  background: #1F2937;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const Th = styled.th`
  border-bottom: 2px solid #ccc;
  text-align: left;
  padding: 12px;
  background-color: #161d27ff;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const Td = styled.td`
  border-bottom: 1px solid #e0e0e0;
  padding: 12px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const Links = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin-right: 10px;
`

export const Button = styled.button`
    font-size: 17px;
    color: #fff;
    background-color: #0070c5ff;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;

    &:hover{
        background-color: #0064b1ff;
    }
`