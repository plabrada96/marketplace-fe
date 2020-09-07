import { Observable } from 'rxjs';
import { Category } from './../models/category';
import { Enviroment } from './enviroments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  private urlBase: string;

  constructor(private httpClient: HttpClient) {
      this.urlBase = Enviroment.urlBase + Enviroment.urlCategory;
   }

   listCategories(): Observable<Category[]>{
     return this.httpClient.get<Category[]>(this.urlBase);
   }

}
