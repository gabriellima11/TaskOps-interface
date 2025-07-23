import { Container, Input, ContainerInput, TextArea, Select, Button, ContainerSelect } from "./styles";
import companies from "../../constants/companies";
import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from '../../services/api';
import authors from "../../constants/author";

export const EditTask = () => {
  const titleRef = useRef();
  const helpdeskRef = useRef()
  const descriptionRef = useRef();
  const authorRef = useRef();
  const companyRef = useRef();

  const location = useLocation();
  const navigate = useNavigate()
  const task = location.state?.task;

  useEffect(() => {
    if (task) {
      titleRef.current.value = task.title;
      helpdeskRef.current.value = task.helpdesk;
      descriptionRef.current.value = task.description;
      authorRef.current.value = task.author;
      companyRef.current.value = task.company;
    }
    console.log(task)
  }, [task]);

  const editTasks = async () => {
    const taskData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      author: authorRef.current.value,
      company: companyRef.current.value
    };

    try {
      await api.put(`http://tasks-ops-backend.vercel.app/api/edit-task/${task._id}`, taskData);
      alert("Chamado alterado com sucesso!");
      navigate('/task')
      
    } catch (error) {
      console.error("Erro ao editar chamado:", error);
      alert("Erro ao editar chamado");
    }
  };

  return (
    <Container>
      <ContainerInput>
        <label>Título:</label>
        <Input type="text" ref={titleRef} />
      </ContainerInput>
      <ContainerInput>
        <label>Link Helpdesk:</label>
        <Input type="text" ref={helpdeskRef} />
      </ContainerInput>
      <ContainerInput>
        <label>Descrição:</label>
        <TextArea ref={descriptionRef} />
      </ContainerInput>
    
      <ContainerSelect>
        <label>Analista:</label>
        <Select ref={authorRef}>
          {authors.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>

        <label>Empresa:</label>
        <Select ref={companyRef}>
          {companies.map((item) => (
            <option value={item.value} key={item.value}>
              {item.title}
            </option>
          ))}
        </Select>
      </ContainerSelect>
      <Button onClick={editTasks}>Salvar</Button>
    </Container>
  );
};
