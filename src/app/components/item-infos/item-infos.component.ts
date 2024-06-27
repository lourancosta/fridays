import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-infos',
  standalone: true,
  templateUrl: './item-infos.component.html',
  styleUrls: ['./item-infos.component.css']
})
export class ItemInfosComponent {
  @Input() category!: string;
  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;

}
