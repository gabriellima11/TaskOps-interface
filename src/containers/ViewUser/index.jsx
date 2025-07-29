import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Container, Table, Th, Td, Links, Button } from "./styles";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { DeleteMenu } from "../../components/DeleteMenu";
import { useNavigate } from "react-router-dom";

export const ViewUsers = () => {
  const navigate = useNavigate()

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const { data } = await api.get("/users");
        setUsers(data);
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      }
    }
    loadUsers();
  }, []);

  const [isDeleteMenuOpen, setIsDeleteMenuOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const openDeleteMenu = (userId) => {
    setUserToDelete(userId);
    setIsDeleteMenuOpen(true);
  };

  const confirmDelete = async () => {
    if (userToDelete) {
      await deleteUser(userToDelete);
      setIsDeleteMenuOpen(false);
      setUserToDelete(null);
    }
  };


  const deleteUser = async (id) => {
    try {
      await api.delete(`http://localhost:3000/api/delete-user/${id}`);
      alert("Chamado deletado com sucesso");
      setUsers(prevUsers => prevUsers.filter(users => users._id !== id));
    } catch (error) {
      alert("Erro ao deletar o chamado");
      console.log(error);
    }
  };
  return (
    <Container>
      <Button onClick={() =>navigate("/register")}>Adicionar usuário</Button>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Admin</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item._id}>
              <Td>{item.name}</Td>
              <Td>{item.email}</Td>
              <Td>{item.admin ? "Sim" : "Não"}</Td>
              <Td>
                <Links to={"/edit-users"} state={{ user: item }}>
                  <FaPencilAlt />
                </Links>
                <Links onClick={() => openDeleteMenu(item._id)}>
                  <FaTrashAlt/>
                </Links>
                {isDeleteMenuOpen && (
                  <DeleteMenu
                    onConfirm={confirmDelete}
                    onCancel={() => setIsDeleteMenuOpen(false)}
                  />
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
