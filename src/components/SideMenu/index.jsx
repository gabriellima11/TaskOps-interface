import { Container, ItemContainer, ListLink } from './styles';
import { useState, useEffect } from 'react';

export const SideMenu = () => {


   const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

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