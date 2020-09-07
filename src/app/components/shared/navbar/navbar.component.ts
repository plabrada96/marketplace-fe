import { ShoppingcarService } from './../../../services/shoppingcar.service';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  categories: Category[] = [];
  openModal: boolean;
  totalCart: number;

  constructor(private categoryService:CategoryService, private router:Router, private shoppingCartService: ShoppingcarService) {
      
   }
  ngOnDestroy(): void {
    this.router.ngOnDestroy();
  }

  ngOnInit(): void {
    this.categoryService.listCategories().subscribe(res=> {
      this.categories = res;
    });

   this.totalCart = this.shoppingCartService.total;
  }

  listProductsByCategory(id: number){
    this.router.navigate( ['/products',{categoryId: id}]);
  }

  /**
   * search products by name
   * @param criterial search criteria
   */
  listProductsBySearch(criterial: string){
    this.router.navigate( ['/products',{name: criterial}]);
  }

  getTotalProducts(){
    return this.shoppingCartService.getProductsInCart();
  }
}
