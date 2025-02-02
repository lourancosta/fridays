import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SecondHeaderComponent } from 'src/app/components/second-header/second-header.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PhotoGalleryComponent } from 'src/app/components/photo-gallery/photo-gallery.component';
import { ItemInfosComponent } from 'src/app/components/item-infos/item-infos.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    SecondHeaderComponent,
    HeaderComponent,
    PhotoGalleryComponent,
    ItemInfosComponent,
    FooterComponent,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product: any;
  galleryImages: [] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.product = this.searchProductById(id);
  }

  searchProductById(id: string) {
    this.product = this.productsService.getProductById(id);
    return this.product;
  }

}
