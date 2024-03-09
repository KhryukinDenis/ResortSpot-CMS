import { action, makeAutoObservable, observable } from "mobx";
import agent from "../agent/agent";
import { Room } from "../model/room";

export class RoomStore {
  constructor() {makeAutoObservable(this)}
  
  roomAgent = agent.RoomAgent;

  @observable rooms: Room[] = [];
  @observable room: Room | null = null;
  @observable canEdit: boolean = false

  @action
  fetchAll = () => {
    this.room = null;
    this.roomAgent.getAllRooms()
      .then((response) => (this.rooms = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = (id: number) => {
    this.room = null;
    this.roomAgent.getOneRoom(id)
      .then((response) => (this.room = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (room: Room): Promise<boolean> => {
    return this.roomAgent.updateRoom(room)
      .then(() => {
        console.log('Номер обновлен');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении номера', error);
        return false;
      });
  };

  @action
  delete = (id: number): Promise<boolean> => {
    return this.roomAgent.deleteRoom(id)
      .then(() => {
        console.log('Номер удален');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении номера', error);
        return false;
      });
  };

  @action 
  setRoom = (room: Room | null) => {
    this.room = room;
  };

  @action
  createNew = () => {
    this.setCanEdit(false);
    this.setRoom(new Room({}));
  };

  @action
  setCanEdit = (canEdit: boolean) => {
    this.canEdit = canEdit ?? !this.canEdit;
  };
}