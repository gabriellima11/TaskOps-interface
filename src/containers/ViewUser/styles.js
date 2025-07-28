import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  overflow-x: auto; /* permite rolagem horizontal em telas pequenas */
  padding: 16px;
  box-sizing: border-box;
`;

export const Table = styled.table`
  width: 100em;
  min-width: 600px;
  border-collapse: collapse;
  background: #fff;
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
  background-color: #f7f7f7;
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

export const EditButton = styled.button`
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`

export const Links = styled(Link)`
    text-decoration: none;
    color: #000;
`