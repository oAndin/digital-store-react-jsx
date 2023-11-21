import { API } from "../services"

export const useMarcas = async () => {
  const response = await API.get('marcas');

  return response.data;
}