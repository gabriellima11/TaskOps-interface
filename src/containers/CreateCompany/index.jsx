import { Container, Input, ContainerInput, Button } from "./styles";
import { useForm } from "react-hook-form";
import { api } from '../../services/api';
import { toast } from "react-toastify";
import { ViewCompanies } from "../ViewCompany";
import { useNavigate } from "react-router-dom";

export const CreateCompany = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: "",
    }
  });

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Cadastrando empresa...");
    try {

      await api.post('/create-company', data);

      toast.update(loadingToast, {
        render: "Cadastro realizado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 3000
      });
    } catch (error) {
      toast.update(loadingToast, {
        render: "Falha ao registrar.",
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
            <h3>Criar empresa:</h3>
          <label>Nome:</label>
          <Input type="text" {...register("title", { required: true })} />
          {errors.name && <span>Nome é obrigatório</span>}
        </ContainerInput>
    

        <Button type="submit">Salvar</Button>
      </form>
      < ViewCompanies/>
    </Container>
  );
};
