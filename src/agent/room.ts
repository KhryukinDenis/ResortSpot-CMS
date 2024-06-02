import axios, { AxiosResponse } from "axios";
import { Room } from "../model/room";

export const RoomAgent = {
  getAllRooms: async (hotel_id: number): Promise<AxiosResponse<Room[]>> => {
    try {
      const response = await axios.get(`/hotel/${hotel_id}/rooms`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneRoom: async (id: number, hotel_id: number): Promise<AxiosResponse<Room>> => {
    try {
      const response = await axios.get(`/hotel/${hotel_id}/rooms/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateRoom: async (data: Room, hotel_id: number): Promise<AxiosResponse<Room>> => {
    try {
      const response = await axios.post(`/hotel/${hotel_id}/rooms`, data);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteRoom: async (id: number, hotel_id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(`/hotel/${hotel_id}/rooms/${id}`);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};