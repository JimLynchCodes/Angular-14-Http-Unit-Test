import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Stuff } from './data-stuff.model';

@Injectable({
  providedIn: 'root'
})
export class DataStuffService {
  
  constructor(private httpClient: HttpClient) { }
  
  getStuff(): Promise<Stuff> {
       return firstValueFrom(this.httpClient.get<any>('https://dummyjson.com/products/1'));
  }
}
