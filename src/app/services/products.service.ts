import { Injectable } from '@angular/core';

import dataProducts from '../../data/productsData.json'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  initialProductsList = dataProducts.products;
  productsList = dataProducts.products;

  productListByCategory: any;
  product: any;

  constructor() { }

  getAllProducts() {
    return this.initialProductsList
  }

  getProductsByCategory(filterCategory: string) {
    this.productsList = this.initialProductsList

    if (filterCategory == 'todos') {
      return this.productsList
    } else {
      this.productListByCategory = this.initialProductsList.filter((product: any) => product.category === filterCategory)

      if (this.productListByCategory.length >= 1) {
        return this.productListByCategory
      }
    }
  }

  getProductById(id: string) {
    this.product = this.initialProductsList.find((product: any)  => product.id === id)
    return this.product
  }
}
