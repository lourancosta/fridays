import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { MenuOptionsComponent } from '../menu-options/menu-options.component';
import { CardComponent } from '../card/card.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    NgFor,
    MenuOptionsComponent,
    CardComponent
  ],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  productsList: any;
  productListByCategory: any;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsList = this.productsService.getAllProducts();
  }

  changeCategory(e: any) {
    const category = e.target.value;
    this.productsList = this.productsService.getProductsByCategory(category);
  }
}
