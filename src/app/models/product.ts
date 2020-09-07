import { Category } from './category';
import { AbstractType } from '@angular/core';
export class Product{
    id: number;
    category: Category;
    code: string;
    name: string;
    status: string;
    image: string;
    price: number;
}