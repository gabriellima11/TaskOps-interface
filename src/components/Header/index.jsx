import { Link, Container, Image, ContainerLinks } from "./styles";
import companies from "../../constants/companies";
import Logo from '../../assets/logo.png';


export const Header = ({ onSelectCompany }) => {
  const handleClick = (company) => {
    onSelectCompany(company === "Todos" ? null : company);
  };

  return (
    <Container>
      <a href="/"><Image src={Logo} alt="Logo" /></a>

      <ContainerLinks>
        {[...companies.slice(1), { id: "all", value: "Todos" }].map((company) => (
          <Link key={company.id} onClick={() => handleClick(company.value)}>
            {company.value}
          </Link>
        ))}
      </ContainerLinks>

      <p>Suporte Infraestrutura</p>
    </Container>
  );
};
