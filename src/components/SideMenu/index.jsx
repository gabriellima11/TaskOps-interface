import { Container, ItemContainer, ListLink, DivAdmin } from './styles';
import { useState } from 'react';
import { useUser } from '../../hooks/userContext';

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { userInfo: { user } } = useUser();

  return (
    <Container>
      <ItemContainer>
        <ListLink to="/create-task">Atribuir</ListLink>
        <ListLink to="/task">Chamados</ListLink>

        {user?.admin === true && (
          <>
            <ListLink className='admin' as="button" onClick={() => setIsOpen(!isOpen)}>
              Admin
            </ListLink>

            {isOpen && (
              <DivAdmin>
                <ListLink to={"/companies"}>Empresas</ListLink>
                <ListLink to={"/users"}>Usuários</ListLink>
              </DivAdmin>
            )}
          </>
        )}
      </ItemContainer>
    </Container>
  );
};
