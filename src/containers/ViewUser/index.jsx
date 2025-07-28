import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Container, Table, Th, Td, EditButton, Links } from "./styles";

export const ViewUsers = () => {
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

  const handleEdit = (id) => {
    console.log("Editar usuário com ID:", id);
  };

  return (
    <Container>
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
                  Editar
                </Links>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
