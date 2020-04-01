import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient : HttpClient) { }

  firstHttpServiceTest(){
    return console.log('Hey, its first service');
  }

  getAllBeers(){
    return this._httpClient.get('https://api.openbrewerydb.org/breweries');
  }

}
