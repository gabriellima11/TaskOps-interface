import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
`;

export const ContainerTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  border: 1px solid #0591fc4b;
  border-radius: 10px;
  padding: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconsDiv = styled.div`
  display: flex;
  gap: 15px;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 20px 0 ;
  padding-bottom: 20px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #0591fc4b;
  background-color: #0593FC;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 14px;
`;
