import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products: Product[] = [];
  category: string;

  constructor(private productService:ProductService,
    private router:Router, private activatedRouter: ActivatedRoute) { 
      this.category="";
  }


  ngOnInit(): void {
    this.activatedRouter.params.subscribe(param => {
      if(param){
        this.listProducts(param);
      }
      else
        this.listProducts(null);
    });
  }

  showDetail(id: number){
    this.router.navigate( ['/product-detail',id]);
  }

  listProducts(params:any){
    this.productService.getProducts(params).subscribe(res =>{
    this.products = res.content;
    this.category = res.content[0].category.name;
    });
  }

  getImagesByProduct(product: Product){
    return product.image.split(",")[0];
  }
}
