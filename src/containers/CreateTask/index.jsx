//Styles
import { Container, Input, ContainerInput, TextArea, Select, Button, ContainerSelect } from "./styles";

//Constant
import author from '../../constants/author'
import companies from "../../constants/companies";
import status from '../../constants/status'
import priorities from "../../constants/priority";

import { useRef } from "react";
import { api } from '../../services/api';

export const CreateTask = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const authorRef = useRef();
  const companyRef = useRef();
  const helpdeskRef = useRef();
  const priorityRef = useRef();
  const statusRef = useRef();

  const createTasks = async () => {
    const taskData = {
      title: titleRef.current.value,
      helpdesk: helpdeskRef.current.value,
      description: descriptionRef.current.value,
      author: authorRef.current.value,
      company: companyRef.current.value,
      priority: priorityRef.current.value,
      status: statusRef.current.value
    };
    try {
      await api.post("https://tasks-ops-backend.vercel.app/api/create-task", taskData);
      alert("Chamado criado com sucesso!");

      
      titleRef.current.value = "";
      helpdeskRef.current.value = "";
      descriptionRef.current.value = "";
      authorRef.current.value = "";
      companyRef.current.value = "";
      priorityRef.current.value = "";
      statusRef.current.value = "";

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

        <label>Prioridade:</label>
        <Select ref={priorityRef}>
          {priorities.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>

        <label>Status:</label>
        <Select ref={statusRef}>
          {status.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>
      </ContainerSelect>
      <Button onClick={createTasks}>Salvar</Button>
    </Container>
  );
};
