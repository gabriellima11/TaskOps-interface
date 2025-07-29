import { Container, Input, ContainerInput, Button } from "./styles";
import { useForm } from "react-hook-form";
import { api } from '../../services/api';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      admin: false
    }
  });

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Cadastrando usuário...");
    try {

      await api.post('/register', data);

      toast.update(loadingToast, {
        render: "Cadastro realizado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 3000
      });
      navigate('/users');
    } catch (error) {
      toast.update(loadingToast, {
        render: "Falha ao registrar novo usuário.",
        type: "error",
        isLoading: false,
        autoClose: 3000
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContainerInput>
          <label>Nome:</label>
          <Input type="text" {...register("name", { required: true })} />
          {errors.name && <span>Nome é obrigatório</span>}
        </ContainerInput>
        <ContainerInput>
          <label>Email:</label>
          <Input type="email" {...register("email", { required: true })} />
          {errors.email && <span>Email é obrigatório</span>}
        </ContainerInput>
        <ContainerInput>
          <label>Senha:</label>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Senha é obrigatória</span>}
        </ContainerInput>
        

        <Button type="submit">Salvar</Button>
      </form>
    </Container>
  );
};
