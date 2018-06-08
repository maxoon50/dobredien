import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  public setItem (key: string, values: {}) {
    values['lastConnection'] = Date.now();
    localStorage.setItem(key, JSON.stringify(values));
  }
}
