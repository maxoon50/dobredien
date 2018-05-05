export class User {
  
  private _pseudo: string;
  private _online: boolean;

  constructor (pPseudo: string) {
    this._pseudo = pPseudo;
  }


  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get online(): boolean {
    return this._online;
  }

  set online(value: boolean) {
    this._online = value;
  }
}
