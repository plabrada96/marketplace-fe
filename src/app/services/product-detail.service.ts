import { ProductDetail } from './../models/product_detail';
import { Enviroment } from './enviroments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  private urlBase: string;

  constructor(private httpClient: HttpClient) {
      this.urlBase = Enviroment.urlBase + Enviroment.urlProductDetail;
   }

   getProductDetail(idProduct: number): Observable<any>{

      const params = {
        idProduct : idProduct.toString(),
      }
      
      return this.httpClient.get<any>(this.urlBase, {params:params});
   }

}
