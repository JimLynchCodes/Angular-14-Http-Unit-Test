import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStuffService {
  
  constructor(private httpClient: HttpClient) { }
  
  getStuff(): Promise<String> {
       return firstValueFrom(this.httpClient.get<any>('https://dummyjson.com/products/1'));
  }
}
