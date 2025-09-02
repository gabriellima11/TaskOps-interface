import { api } from "../services/api";

let companiesCache = [
];

export const getCompanies = async () => {
  try {
    const { data } = await api.get("/company");
    companiesCache = [...data, { id: "all", title: "Todos", value: "Todos" }];
    return companiesCache;
  } catch (error) {
    console.error("Erro ao buscar empresas:", error);
    return companiesCache;
  }
};

export default companiesCache;
