import axios, { AxiosResponse } from "axios";
import { Nature } from "../model/nature";

export const NatureAgent = {
  getAllNatures: async (): Promise<AxiosResponse<Nature[]>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneNature: async (id: number): Promise<AxiosResponse<Nature>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateNature: async (data: Nature): Promise<AxiosResponse<Nature>> => {
    try {
      const response = await axios.put(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteNature: async (id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};