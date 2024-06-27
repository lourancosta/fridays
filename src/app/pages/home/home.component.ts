import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { ItemListComponent } from 'src/app/components/item-list/item-list.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ItemListComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  ngOnInit(): void { }
}
