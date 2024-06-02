import axios, { AxiosResponse } from "axios";
import { Nature } from "../model/nature";

export const NatureAgent = {
  getAllNatures: async (city_id: number): Promise<AxiosResponse<Nature[]>> => {
    try {
      const response = await axios.get(`/city/${city_id}/natures`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneNature: async (id: number, city_id: number): Promise<AxiosResponse<Nature>> => {
    try {
      const response = await axios.get(`/city/${city_id}/natures/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateNature: async (data: Nature, city_id: number): Promise<AxiosResponse<Nature>> => {
    try {
      const response = await axios.post(`/city/${city_id}/natures`, data);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteNature: async (id: number, city_id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(`/city/${city_id}/natures/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};