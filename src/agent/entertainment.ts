import axios, { AxiosResponse } from "axios";
import { Entertainment } from "../model/entertainment";

export const EntertainmentAgent = {
  getAllEntertainments: async (): Promise<AxiosResponse<Entertainment[]>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneEntertainment: async (id: number): Promise<AxiosResponse<Entertainment>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateEntertainment: async (data: Entertainment): Promise<AxiosResponse<Entertainment>> => {
    try {
      const response = await axios.put(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteEntertainment: async (id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};