import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Container, Table, Th, Td, Links, Button } from "./styles";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { DeleteMenu } from "../../components/DeleteMenu";
import { useNavigate } from "react-router-dom";

export const ViewCompanies = () => {
  const navigate = useNavigate()

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const { data } = await api.get("/company");
        setCompanies(data);
      } catch (error) {
        console.error("Erro ao carregar empresa:", error);
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
      await deleteCompany(userToDelete);
      setIsDeleteMenuOpen(false);
      setUserToDelete(null);
    }
  };


  const deleteCompany = async (id) => {
    try {
      await api.delete(`/delete-company/${id}`);
      alert("Empresa deletado com sucesso");
      setCompanies(prevUsers => prevUsers.filter(companies => companies._id !== id));
    } catch (error) {
      alert("Erro ao deletar empresa");
      console.log(error);
    }
  };
  return (
      <Container>
      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {companies.map((item) => (
            <tr key={item._id}>
              <Td>{item.title}</Td>
              <Td>
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
