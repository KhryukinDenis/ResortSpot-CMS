import { action, makeAutoObservable, observable } from "mobx";
import agent from "../agent/agent";
import { Rest } from "../model/rest";

export class RestStore {
  constructor() {makeAutoObservable(this)}
  
  restAgent = agent.RestAgent;

  @observable rests: Rest[] = [];
  @observable rest: Rest | null = null;
  @observable canEdit: boolean = false;

  @action
  setCanEdit = (canEdit: boolean) => {
    this.canEdit = canEdit ?? !this.canEdit;
  };

  @action
  fetchAll = async (hotel_id: number) => {
    this.rest = null;
    await this.restAgent.getAllRests(hotel_id)
      .then((response) => (this.rests = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = async (id: number, hotel_id: number) => {
    this.rest = null;
    await this.restAgent.getOneRest(id, hotel_id)
      .then((response) => (this.rest = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (rest: Rest, hotel_id: number): Promise<boolean> => {
    return this.restAgent.updateRest(rest, hotel_id)
      .then(() => {
        this.setCanEdit(false);
        console.log('Объект отдыха обновлен');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении объекта отдыха', error);
        return false;
      });
  };

  @action
  delete = (id: number, hotel_id: number): Promise<boolean> => {
    return this.restAgent.deleteRest(id, hotel_id)
      .then(() => {
        console.log('Объект отдыха удален');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при удалении объект отдыха', error);
        return false;
      });
  };

  @action 
  setRest = (rest: Rest | null) => {
    this.rest = rest;
  };

  @action
  createNew = () => {
    this.setCanEdit(false);
    this.setRest(new Rest({}));
  };
}