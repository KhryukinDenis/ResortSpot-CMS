import axios, { AxiosResponse } from "axios";
import { Room } from "../model/room";

export const RoomAgent = {
  getAllRooms: async (): Promise<AxiosResponse<Room[]>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  getOneRoom: async (id: number): Promise<AxiosResponse<Room>> => {
    try {
      const response = await axios.get(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  updateRoom: async (data: Room): Promise<AxiosResponse<Room>> => {
    try {
      const response = await axios.put(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  },
  deleteRoom: async (id: number): Promise<AxiosResponse<void>> => {
    try {
      const response = await axios.delete(``);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
};