import { Link, Container, Image, ContainerLinks, Logout, DivInfo } from "./styles";
import companies from "../../constants/companies";
import Logo from '../../assets/logo.png';
import { useUser } from "../../hooks/userContext";
import { useState, useEffect } from "react";
import { api } from "../../services/api";


export const Header = ({ onSelectCompany }) => {
  const [company, setCompany] = useState([])

  const {logout} = useUser()
  const {userInfo:{user}} = useUser()

  const handleClick = (company) => {
    onSelectCompany(company === "Todos" ? null : company);
  };

  useEffect(()=>{
    async function loadCompanies(){
      const {data} = await api.get("/company")
      setCompany(data)
    }
    loadCompanies()
  },[])

  return (
    <Container>
      <a href="/task"><Image src={Logo} alt="Logo" /></a>

      <ContainerLinks>
        {[...companies.slice(1), { id: "all", value: "Todos" }].map((company) => (
          <Link key={company.id} onClick={() => handleClick(company.value)}>
            {company.value}
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
