//Styles
import { Container, Input, ContainerInput, TextArea, Select, Button, ContainerSelect } from "./styles";

//Constant
import author from '../../constants/author'
import { getCompanies } from "../../constants/companies";
import { getAuthors } from "../../constants/author";
import status from '../../constants/status'
import priorities from "../../constants/priority";

import { useRef, useState, useEffect } from "react";
import { api } from '../../services/api';

export const CreateTask = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const authorRef = useRef();
  const companyRef = useRef();
  const helpdeskRef = useRef();
  const priorityRef = useRef();
  const statusRef = useRef();

  const [loadingFormalize, setLoadingFormalize] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
      async function loadCompanies() {
        const data = await getCompanies();
        setCompanies(data);
      }
      loadCompanies();

      async function loadAuthors() {
        const data = await getAuthors();
        setAuthors(data);
      }
      loadAuthors();
    }, []);

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
      await api.post("/create-task", taskData);
      alert("Chamado criado com sucesso!");

      // Limpar campos
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

  const handleFormalize = async () => {
  if (!descriptionRef.current.value.trim()) {
    alert("Digite uma descrição antes de formalizar!");
    return;
  }

  setLoadingFormalize(true);
  try {
    const response = await api.post("/formalize", {
      text: descriptionRef.current.value
    });

    descriptionRef.current.value = response.data.formalized || response.data.text || "";
  } catch (error) {
    console.error("Erro ao formalizar texto:", error);
    alert("Erro ao formalizar texto");
  } finally {
    setLoadingFormalize(false);
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
        <Button className="formalize" onClick={handleFormalize} disabled={loadingFormalize}>
          {loadingFormalize ? "Formalizando..." : "Formalizar"}
        </Button>
      </ContainerInput>

      <ContainerSelect>
        <label>Analista:</label>
          <Select ref={authorRef}>
            {authors.map((item) => (
              <option value={item.name} key={item.name}>
                {item.name}
              </option>
            ))}
          </Select>

        <label>Empresa:</label>
        <Select ref={companyRef}>
          {companies.map((item) => (
            <option value={item.title} key={item.title}>
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
