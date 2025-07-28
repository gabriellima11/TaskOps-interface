import { Button } from "../../components/Button"
import { Container, Content, Header, Body, InputsDiv, Input, Footer } from "./styles"
import { useForm } from "react-hook-form"
import { api } from '../../services/api'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const loadingToast = toast.loading("Realizando login...");
        try {
            const response = await api.post('/login', data);
            toast.update(loadingToast, { 
                render: "Login realizado com sucesso!",
                type: "success",
                isLoading: false,
                autoClose: 3000
            });
            navigate('/task')
        } catch (error) {
            toast.update(loadingToast, { 
                render: "Falha ao realizar login.",
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
                        Seja bem-vindo(a)!<br /> Realize seu login com suas credenciais:
                    </Header>

                    <Body>
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
                        <p>Ainda não tem um login? <a href="/register">Registre-se</a></p>
                        <Button type="submit">Entrar</Button>
                    </Footer>
                </form>
            </Content>
        </Container>
    );
};
