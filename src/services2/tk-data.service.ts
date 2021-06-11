import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TKDataService {

  private url = 'https://kol2taitk.herokuapp.com';


  constructor(private http : HttpClient) { }

    getAllItems(){
    return this.http.get(this.url + '/api/order/items');
  }
  getItemById(id){
    return this.http.get(this.url + '/api/order/items/' + id);
  }
}
