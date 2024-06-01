import { action, makeAutoObservable, observable } from "mobx";

export class AuthStore {
  constructor() {makeAutoObservable(this)}

  @observable HARDCODED_LOGIN: string = "admin";
  @observable HARDCODED_PASSWORD: string = "resortSpot2024";

  @observable login: string | null = null;
  @observable password: string | null = null;
  @observable warning: string | null = null;

  @action
  setLogin = (login: string | null) => {
    this.login = login;
  };

  @action
  setPassword = (pass: string | null) => {
    this.password = pass;
  };

  @action
  setWarning = (text: string | null) => {
    this.warning = text;
  };

  @action
  loadLocalStorage = () => {
    const login = localStorage.getItem("login");
    const password = localStorage.getItem("password");
    if (login && password) {
      this.login = login;
      this.password = password;
    }
  };

  @action
  saveToLocalStorage = (login: string, password: string) => {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
  };

  @action
  reset = (login: string, password: string) => {
    this.login = login;
    this.password = password;
  };

  @action 
  unlogin = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
  };
}
