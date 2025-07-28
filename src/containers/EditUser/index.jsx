import { Container, Input, ContainerInput, TextArea, Select, Button, ContainerSelect } from "./styles";
import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {api} from '../../services/api'


export const EditUsers = () => {
  const nameRef = useRef();
  const emailRef = useRef()

  const location = useLocation();
  const navigate = useNavigate()
  const user = location.state?.user;

  useEffect(() => {
    if (user) {
      nameRef.current.value = user.name;
      emailRef.current.value = user.email;

    }
  }, [user]);

  const editTasks = async () => {
    const taskData = {
      name: nameRef.current.value,
      email: emailRef.current.value
    };

    try {
      await api.put(`https://tasks-ops-backend.vercel.app/api/edit-task/${task._id}`, taskData);
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
        <label>Nome:</label>
        <Input type="text" ref={nameRef} />
      </ContainerInput>
      <ContainerInput>
        <label>Email:</label>
        <Input type="text" ref={emailRef} />
      </ContainerInput>
      
      <Button>Salvar</Button>
    </Container>
  );
};
