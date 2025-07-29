import { Container, ContainerTask, Info, Button, IconsDiv, Links, PaginationContainer, PaginationButton, PageInfo } from "./styles";
import { useState, useEffect } from "react";
import { api } from '../../services/api';
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { DeleteMenu } from '../../components/DeleteMenu';

export const ViewTask = ({ filterCompany }) => {
  const [task, setTask] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const [isDeleteMenuOpen, setIsDeleteMenuOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const openDeleteMenu = (taskId) => {
    setTaskToDelete(taskId);
    setIsDeleteMenuOpen(true);
  };

  const confirmDelete = async () => {
    if (taskToDelete) {
      await deleteTask(taskToDelete);
      setIsDeleteMenuOpen(false);
      setTaskToDelete(null);
    }
  };

  useEffect(() => {
    async function loadTasks() {
      try {
        const { data } = await api.get('/task');
        setTask(data);
      } catch (error) {
        console.error('Erro ao carregar tasks:', error);
      }
    }
    loadTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await api.delete(`https://tasks-ops-backend.vercel.app/api/delete-task/${id}`);
      alert("Chamado deletado com sucesso");
      setTask(prevTasks => prevTasks.filter(task => task._id !== id));
    } catch (error) {
      alert("Erro ao deletar o chamado");
      console.log(error);
    }
  };

  const filteredTasks =
    filterCompany && filterCompany !== "Todos"
      ? task.filter(t => t.company === filterCompany)
      : task;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  return (
    <Container>
      {currentTasks.map((item) => (
        <ContainerTask key={item._id}>
          <Info>
            <p>Título: {item.title}</p>
            <p>Link do Chamado: {item.helpdesk}</p>
            <p>Descrição: {item.description}</p>
            <p>Analista: {item.author}</p>
            <p>Empresa: {item.company}</p>
            <p>Prioridade: {item.priority}</p>
            <p>Status: {item.status}</p>
          </Info>
          <IconsDiv>
            <Button onClick={() => openDeleteMenu(item._id)}>
              <FaTrashAlt size={20} />
            </Button>
            {isDeleteMenuOpen && (
              <DeleteMenu
                onConfirm={confirmDelete}
                onCancel={() => setIsDeleteMenuOpen(false)}
              />
            )}
            <Links to={"/edit-task"} state={{ user: item }}>
              <FaPencilAlt size={20} />
            </Links>
          </IconsDiv>
        </ContainerTask>
      ))}

      <PaginationContainer>
        <PaginationButton onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Anterior
        </PaginationButton>
        <PageInfo>Página {currentPage} de {totalPages}</PageInfo>
        <PaginationButton onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Próxima
        </PaginationButton>
      </PaginationContainer>
    </Container>
  );
};
