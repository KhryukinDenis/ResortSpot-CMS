import axios, { AxiosResponse } from "axios";
import { City } from "../model/city";

export const CityAgent = {
  getAllCities: async (): Promise<AxiosResponse<City[]>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};