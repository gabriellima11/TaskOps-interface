import { Container, Input, ContainerInput, Button } from "./styles";
import { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from '../../services/api';

export const EditUsers = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isAdmin, setIsAdmin] = useState(false); // estado controlado do checkbox

  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  useEffect(() => {
    if (user) {
      if (nameRef.current) nameRef.current.value = user.name || "";
      if (emailRef.current) emailRef.current.value = user.email || "";
      if (passwordRef.current) passwordRef.current.value = "";
      setIsAdmin(!!user.admin); // garante boolean
    }
  }, [user]);

  const editUsers = async () => {
    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      admin: isAdmin
    };

    try {
      await api.put(`/edit-user/${user._id}`, userData);
      alert("Usuário alterado com sucesso!");
      navigate("/users");
    } catch (error) {
      console.error("Erro ao editar usuário:", error);
      alert("Erro ao editar usuário");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAdmin(e.target.checked);
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
      <ContainerInput>
        <label>Senha:</label>
        <Input type="password" ref={passwordRef} />
      </ContainerInput>
      <ContainerInput>
        <label>Admin:</label>
        <Input
          type="checkbox"
          checked={isAdmin}
          onChange={handleCheckboxChange}
        />
      </ContainerInput>

      <Button onClick={editUsers}>Salvar</Button>
    </Container>
  );
};
