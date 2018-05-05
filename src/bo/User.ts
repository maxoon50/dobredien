export class User {

  private _pseudo: string;
  private _online: boolean;
  private _id: number;

  constructor (pPseudo: string, pOnline: boolean, pId: number) {
    this._pseudo = pPseudo;
    this._online = pOnline;
    this._id = pId;
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

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
