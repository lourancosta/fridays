import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ItemInfosComponent } from './components/item-infos/item-infos.component';
// import { SecondHeaderComponent } from './components/second-header/second-header.component';
// import { ProductComponent } from './pages/product/product.component';
// import { CardComponent } from './components/card/card.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
// import { ItemListComponent } from './components/item-list/item-list.component';
// import { MenuOptionsComponent } from './components/menu-options/menu-options.component';
// import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
// import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
