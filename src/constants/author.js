import { api } from "../services/api";

let authorCache = [
];

export const getAuthors = async () => {
  try {
    const { data } = await api.get("/users");
    authorCache = [...data];
    return authorCache;
  } catch (error) {
    console.error("Erro ao buscar empresas:", error);
    return authorCache;
  }
};

export default authorCache;
