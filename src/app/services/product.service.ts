import { Observable } from 'rxjs';
import { Enviroment } from './enviroments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlBase: string;

  constructor(private httpClient: HttpClient) {
    this.urlBase = Enviroment.urlBase + Enviroment.urlProduct;
  }

  getProducts(parameters: any): Observable<any> {
    return this.httpClient.get<any>(this.urlBase,{ params: parameters});
  }
}
