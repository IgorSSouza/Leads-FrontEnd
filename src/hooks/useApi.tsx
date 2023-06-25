import axios from "axios";
import { Lead } from "../interfaces/Lead";

const api = axios.create({
  baseURL: "http://localhost:5543/api"
});

export const useApi = () => ({

  listLeads: async (status: number) => {
    const response = await api.get("/Leads", { params: { status } });

    return response.data;
  },

  postLeads: async (leads: Lead) => {
    try {
      const response = await api.post('/Leads', leads);
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar os leads:', error);
      throw error;
    }
  },

  putLeads: async (id: number, status: number) => {
    try {
      const response = await api.put(`/Leads/${id}`, status, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar os leads:', error);
      throw error;
    }
  }
});
