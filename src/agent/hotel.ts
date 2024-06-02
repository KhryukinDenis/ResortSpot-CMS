import axios, { AxiosResponse } from "axios";
import { Hotel } from "../model/hotel";

export const HotelAgent = {
  getAllHotels: async (city_id: number): Promise<AxiosResponse<Hotel[]>> => {
    try {
      const response = await axios.get(`/city/${city_id}/hotels`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneHotel: async (id: number, city_id: number): Promise<AxiosResponse<Hotel>> => {
    try {
      const response = await axios.get(`/city/${city_id}/hotels/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateHotel: async (data: Hotel, city_id: number): Promise<AxiosResponse<Hotel>> => {
    try {
      const response = await axios.post(`/city/${city_id}/hotels`, data);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteHotel: async (id: number, city_id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(`/city/${city_id}/hotels/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};