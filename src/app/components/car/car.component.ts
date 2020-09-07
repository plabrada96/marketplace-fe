import { Product } from './../../models/product';
import { Router } from '@angular/router';
import { ShoppingcarService } from '../../services/shoppingcar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  products: Product[] = [];
  total: number;

  constructor(
    private shoppingCarService: ShoppingcarService,
    private router: Router
  ) {
    this.products = this.shoppingCarService.products;
  }

  ngOnInit(): void {}

  /**
   * get the total sum of the products added to the cart
   */
  getTotal() {
    return this.shoppingCarService.getTotal();
  }

  /**
   * separate the images by commas
   * @param product product with arrangement of images
   */
  getImagesByProduct(product: Product) {
    return product.image.split(',')[0];
  }

  deleteProduct(product: Product) {
    let index = this.products.findIndex((d) => d.id === product.id); //find index in array
    this.products.splice(index, 1); //remove element from array
  }

  showProductDetail(id: number) {
    this.router.navigate(['/product-detail', id]);
  }
}
