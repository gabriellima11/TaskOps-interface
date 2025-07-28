import { Button } from "../../components/Button"
import { Container, Content, Header, Body, InputsDiv, Input, Footer } from "./styles"
import { useForm } from "react-hook-form"
import { api } from '../../services/api'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const loadingToast = toast.loading("Cadastrando usuário...");
        try {
            const response = await api.post('/register', data);
            toast.update(loadingToast, { 
                render: "Cadastro realizado com sucesso!",
                type: "success",
                isLoading: false,
                autoClose: 3000
            });
            navigate('/')
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
            <Content>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Header>
                        Seja bem-vindo(a)!<br />Insira seus dados para se registrar:
                    </Header>

                    <Body>
                        <InputsDiv>
                            <label>Nome:</label>
                            <Input 
                                type="text" 
                                {...register("name", { required: "Nome é obrigatório" })} 
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                        </InputsDiv>

                        <InputsDiv>
                            <label>E-mail:</label>
                            <Input 
                                type="email" 
                                {...register("email", { required: "E-mail é obrigatório" })} 
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </InputsDiv>

                        <InputsDiv>
                            <label>Senha:</label>
                            <Input 
                                type="password" 
                                {...register("password", { required: "Senha é obrigatória" })} 
                            />
                            {errors.password && <span>{errors.password.message}</span>}
                        </InputsDiv>
                       
                    </Body>

                    <Footer>
                        <p>Já tem um login? <a href="/">Entrar</a></p>
                        <Button type="submit">Cadastrar</Button>
                    </Footer>
                </form>
            </Content>
        </Container>
    );
};
