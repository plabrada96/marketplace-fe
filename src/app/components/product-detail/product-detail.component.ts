import { ShoppingcarService } from './../../services/shoppingcar.service';
import { map, timeout } from 'rxjs/operators';
import { ProductDetail } from './../../models/product_detail';
import { ProductDetailService } from './../../services/product-detail.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetailO: Observable<any>;
  imagesArray: string[] = [];
  showMessage: boolean = false;

  constructor(private productDetailService: ProductDetailService, private activatedRouter: ActivatedRoute,
    private shoppingCarService: ShoppingcarService) {
      this.activatedRouter.params.subscribe(param => {
        /**
         * asynchronous product update detail
         */
        this.productDetailO = this.productDetailService.getProductDetail(param.id).pipe(
          map((productD: any) => {
            return productD.content[0];
          })
        );

     });
   }

  ngOnInit(): void {
  }

/**
 * separate text from image by commas
 * @param productDetail 
 */
  getImagesByProduct(productDetail: ProductDetail){
    return productDetail.product.image.split(",");
  }

  /**
   * Agregate info 
   */
  addProductToShoppingCar(product: Product){
     this.shoppingCarService.products.push(product);
     this.changeShowMessage();
  }

  changeShowMessage(){
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }


}
