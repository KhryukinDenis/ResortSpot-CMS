import { action, makeAutoObservable, observable } from "mobx";
import { Hotel } from "../model/hotel";
import agent from "../agent/agent";

export class HotelStore {
  constructor() {makeAutoObservable(this)}

  hotelAgent = agent.HotelAgent;

  @observable hotels: Hotel[] = [];
  @observable hotel: Hotel | null = null;
  @observable canEdit: boolean = false;

  @action
  fetchAll = () => {
    this.hotel = null;
    this.hotelAgent.getAllHotels()
      .then((response) => (this.hotels = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = (id: number) => {
    this.hotel = null;
    this.hotelAgent.getOneHotel(id)
      .then((response) => (this.hotel = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (hotel: Hotel): Promise<boolean> => {
    return this.hotelAgent.updateHotel(hotel)
      .then(() => {
        console.log('Отель обновлен');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении отеля', error);
        return false;
      });
  };

  @action
  delete = (id: number): Promise<boolean> => {
    return this.hotelAgent.deleteHotel(id)
      .then(() => {
        console.log('Отель удален');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении отеля', error);
        return false;
      });
  };

  @action 
  setHotel = (hotel: Hotel | null) => {
    this.hotel = hotel;
  };

  @action
  createNew = () => {
    this.setCanEdit(false);
    this.setHotel(new Hotel({}));
  };

  @action
  setCanEdit = (canEdit: boolean) => {
    this.canEdit = canEdit ?? !this.canEdit;
  };
}