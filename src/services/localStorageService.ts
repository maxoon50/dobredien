import {Injectable} from '@angular/core';
import {User} from '../bo/User';
@Injectable()
export class LocalStorageService {

  public setItem (key: string, values: {}) {
    values['lastConnection'] = Date.now();
    localStorage.setItem(key, JSON.stringify(values));
  }

  public getItem(key: string)  {
    return localStorage.getItem( key );
  }
}
