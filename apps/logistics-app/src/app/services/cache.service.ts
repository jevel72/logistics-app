import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CacheService {
  public data = new Map();
  public storeData(key, value): void {
    this.data.set(key, value);
  }
  public getData(key): any {
    return this.data.get(key);
  }
}
