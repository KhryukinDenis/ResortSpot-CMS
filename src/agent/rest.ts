import axios, { AxiosResponse } from "axios";
import { Rest } from "../model/rest";

export const RestAgent = {
  getAllRests: async (hotel_id: number): Promise<AxiosResponse<Rest[]>> => {
    try {
      const response = await axios.get(`/hotel/${hotel_id}/rests`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneRest: async (id: number, hotel_id: number): Promise<AxiosResponse<Rest>> => {
    try {
      const response = await axios.get(`/hotel/${hotel_id}/rests/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateRest: async (data: Rest, hotel_id: number): Promise<AxiosResponse<Rest>> => {
    try {
      const response = await axios.post(`/hotel/${hotel_id}/rests`, data);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteRest: async (id: number, hotel_id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(`/hotel/${hotel_id}/rests/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};