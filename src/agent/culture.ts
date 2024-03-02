import axios, { AxiosResponse } from "axios";
import { Culture } from "../model/culture";

export const CultureAgent = {
  getAllCultures: async (): Promise<AxiosResponse<Culture[]>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneCulture: async (id: number): Promise<AxiosResponse<Culture>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateCulture: async (data: Culture): Promise<AxiosResponse<Culture>> => {
    try {
      const response = await axios.put(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteCulture: async (id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};