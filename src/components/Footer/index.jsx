import { Container,Img } from "./styles";
import Logo from '../../assets/logo_south-white.png'

export const Footer = () =>{
    return(
        <Container>
            <p>Desenvolvido por SouthTI - 2025 - Todos os Direitos Reservados</p>
            <Img src={Logo} alt="Logo" />
        </Container>
    )
}