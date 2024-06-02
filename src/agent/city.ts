import axios, { AxiosResponse } from "axios";
import { City } from "../model/city";

export const CityAgent = {
  getAllCities: async (): Promise<AxiosResponse<City[]>> => {
    try {
      const response = await axios.get(`/cities`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneCity: async (id: number): Promise<AxiosResponse<City>> => {
    try {
      const response = await axios.get(`/cities/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateCity: async (data: City): Promise<AxiosResponse<City>> => {
    try {
      const response = await axios.post(`/cities`, data);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
};