import axios, { AxiosResponse } from "axios";
import { Culture } from "../model/culture";

export const CultureAgent = {
  getAllCultures: async (city_id: number): Promise<AxiosResponse<Culture[]>> => {
    try {
      const response = await axios.get(`/city/${city_id}/cultures`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneCulture: async (id: number, city_id: number): Promise<AxiosResponse<Culture>> => {
    try {
      const response = await axios.get(`/city/${city_id}/cultures/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateCulture: async (data: Culture, city_id: number): Promise<AxiosResponse<Culture>> => {
    try {
      const response = await axios.post(`/city/${city_id}/cultures`, data);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteCulture: async (id: number, city_id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(`/city/${city_id}/cultures/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};