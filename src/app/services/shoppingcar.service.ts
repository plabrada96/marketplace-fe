import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcarService {

  products: Product[] = [];
  total: number;

  constructor() { }

  /**
   * total sum of products added to the shopping cart
   */
  getTotal(){
    let total: number = 0;
    for(let product of this.products){
      total = total + product.price;
    }
    this.total = total;
    return total;
  }

  /**
   * list shopping cart products
   */
  getProductsInCart(){
    return this.products.length;
  }
  
}
