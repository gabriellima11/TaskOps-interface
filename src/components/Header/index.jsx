import { Link, Container, Image, ContainerLinks, Logout, DivInfo } from "./styles";
import Logo from '../../assets/logo_south-white.png';
import { useUser } from "../../hooks/userContext";
import { useState, useEffect } from "react";
import { getCompanies } from "../../constants/companies";

export const Header = ({ onSelectCompany }) => {
  const [companies, setCompanies] = useState([]);
  const { logout } = useUser();
  const { userInfo: { user } } = useUser();

  const handleClick = (company) => {
    onSelectCompany(company === "Todos" ? null : company);
  };

  useEffect(() => {
    async function loadCompanies() {
      const data = await getCompanies();
      setCompanies(data);
    }
    loadCompanies();
  }, []);

  return (
    <Container>
      <a href="/task"><Image src={Logo} alt="Logo" /></a>

      <ContainerLinks>
        {companies.map((company) => (
          <Link key={company.title} onClick={() => handleClick(company.title)}>
            {company.title}
          </Link>
        ))}
      </ContainerLinks>

      <DivInfo>
        <p>Olá, {user?.name}!</p>
        <Logout href="/" onClick={logout}>Sair</Logout>
      </DivInfo>
    </Container>
  );
};
