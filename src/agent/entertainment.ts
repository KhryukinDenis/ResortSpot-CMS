import axios, { AxiosResponse } from "axios";
import { Entertainment } from "../model/entertainment";

export const EntertainmentAgent = {
  getAllEntertainments: async (city_id: number): Promise<AxiosResponse<Entertainment[]>> => {
    try {
      const response = await axios.get(`/city/${city_id}/entertainments`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneEntertainment: async (id: number, city_id: number): Promise<AxiosResponse<Entertainment>> => {
    try {
      const response = await axios.get(`/city/${city_id}/entertainments/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateEntertainment: async (data: Entertainment, city_id: number): Promise<AxiosResponse<Entertainment>> => {
    try {
      const response = await axios.post(`/city/${city_id}/entertainments`, data);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteEntertainment: async (id: number, city_id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(`/city/${city_id}/entertainments/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};