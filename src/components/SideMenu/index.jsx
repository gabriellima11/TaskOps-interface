import { Container, ItemContainer, ListLink } from './styles';
import { useState, useEffect } from 'react';
import { useUser } from '../../hooks/userContext';

export const SideMenu = () => {

  const {userInfo:{user}} = useUser()
  console.log(user)
  
  return (
    <Container>
      <ItemContainer>
          <ListLink to={"/create-task"}>Atribuir</ListLink>
          <ListLink to={"/task"}>Chamados</ListLink>
          {user?.admin === true && <ListLink to={"/admin"}>Admin</ListLink>}
      </ItemContainer>
    </Container>
  );
};