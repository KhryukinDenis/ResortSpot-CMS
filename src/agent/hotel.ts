import axios, { AxiosResponse } from "axios";
import { Hotel } from "../model/hotel";

export const HotelAgent = {
  getAllHotels: async (): Promise<AxiosResponse<Hotel[]>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneHotel: async (id: number): Promise<AxiosResponse<Hotel>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateHotel: async (data: Hotel): Promise<AxiosResponse<Hotel>> => {
    try {
      const response = await axios.put(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteHotel: async (id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};