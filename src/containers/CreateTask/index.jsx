import { Container, Input, ContainerInput, TextArea, Select, Button, ContainerSelect } from "./styles";
import companies from "../../constants/companies";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { api } from '../../services/api';
import author from '../../constants/author'

export const CreateTask = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const authorRef = useRef();
  const companyRef = useRef();
  const helpdeskRef = useRef();

  const location = useLocation();
  const task = location.state?.task; // Task vinda da ViewTask

  useEffect(() => {
    if (task) {
      titleRef.current.value = task.title;
      descriptionRef.current.value = task.description;
      authorRef.current.value = task.author;
      companyRef.current.value = task.company;
    }
  }, [task]);

  const createTasks = async () => {
    const taskData = {
      title: titleRef.current.value,
      helpdesk: helpdeskRef.current.value,
      description: descriptionRef.current.value,
      author: authorRef.current.value,
      company: companyRef.current.value
    };
    try {
      await api.post("https://tasks-ops-backend.vercel.app/api/create-task", taskData);
      alert("Chamado criado com sucesso!");

      titleRef.current.value = "";
      helpdeskRef.current.value = "";
      descriptionRef.current.value = "";
      authorRef.current.value = "";
      companyRef.current.value = "";
    } catch (error) {
      console.error("Erro ao criar chamado:", error);
      alert("Erro ao criar chamado");
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
            {author.map((item) => (
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
      <Button onClick={createTasks}>Salvar</Button>
    </Container>
  );
};
