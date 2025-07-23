import { Link, Container, Image, ContainerLinks } from "./styles";
import Logo from '../../assets/logo.png';

const companies = [
  "Plamev",
  "Premium",
  "SouthTI",
  "Meep",
  "Pronto-Assistencia",
  "Todos"
];

export const Header = ({ onSelectCompany }) => {
  const handleClick = (company) => {
    onSelectCompany(company === "Todos" ? null : company);
  };

  return (
    <Container>
      <a href="/"><Image src={Logo} alt="Logo" /></a>

      <ContainerLinks>
        {companies.map((company) => (
          <Link key={company} onClick={() => handleClick(company)}>
            {company}
          </Link>
        ))}
      </ContainerLinks>

      <p>Suporte Infraestrutura</p>
    </Container>
  );
};
