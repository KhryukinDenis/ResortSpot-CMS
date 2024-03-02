import axios, { AxiosResponse } from "axios";
import { Rest } from "../model/rest";

export const RestAgent = {
  getAllRests: async (): Promise<AxiosResponse<Rest[]>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneRest: async (id: number): Promise<AxiosResponse<Rest>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateRest: async (data: Rest): Promise<AxiosResponse<Rest>> => {
    try {
      const response = await axios.put(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteRest: async (id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};