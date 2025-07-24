import { Container, DivConfirmDelete, Button } from "./styles";

export const DeleteMenu = ({ onConfirm, onCancel }) => {
  return (
    <Container>
      <DivConfirmDelete>
        <p>Tem certeza que deseja deletar este chamado?</p>
        <Button onClick={onConfirm} style={{ marginRight: '10px' }}>Confirmar</Button>
        <Button onClick={onCancel}>Cancelar</Button>
      </DivConfirmDelete>
    </Container>
  );
};
