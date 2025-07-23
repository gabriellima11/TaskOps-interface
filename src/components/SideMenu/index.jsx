import { Container, ItemContainer, ListLink } from './styles';

export const SideMenu = () => {

  return (
    <Container>
      <ItemContainer>
          <ListLink to={"/create-task"}>Atribuir</ListLink>
          <ListLink to={"/task"}>Chamados</ListLink>
      </ItemContainer>
    </Container>
  );
};