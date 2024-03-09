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
  fetchAll = () => {
    this.rest = null;
    this.restAgent.getAllRests()
      .then((response) => (this.rests = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  fetchById = (id: number) => {
    this.rest = null;
    this.restAgent.getOneRest(id)
      .then((response) => (this.rest = response.data))
      .catch((error) => console.log('Ошибка при запросе', error));
  };

  @action
  update = (rest: Rest): Promise<boolean> => {
    return this.restAgent.updateRest(rest)
      .then(() => {
        console.log('Объект отдыха обновлен');
        return true;
      })
      .catch((error) => {
        console.log('Ошибка при обновлении объекта отдыха', error);
        return false;
      });
  };

  @action
  delete = (id: number): Promise<boolean> => {
    return this.restAgent.deleteRest(id)
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

  @action
  setCanEdit = (canEdit: boolean) => {
    this.canEdit = canEdit ?? !this.canEdit;
  };
}