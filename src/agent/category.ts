import axios, { AxiosResponse } from "axios";
import { Category } from "../model/category";

export const CategoryAgent = {
  getAllCategories: async (): Promise<AxiosResponse<Category[]>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};