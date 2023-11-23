import { useQuery } from "react-query";
import { API } from "../services";

export const useGeneros = () => {
  return useQuery(['genero'], async () => {
    const response = await API.get('/genero');
    return response.data;
  })
}